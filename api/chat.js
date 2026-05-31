import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildLuxaraPrompt } from "../src/utils/luxaraKnowledge.js";

const MODEL_NAME = "gemini-2.5-flash";
const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_MESSAGES = 8;
const MAX_REQUESTS_PER_MINUTE = 20;
const requestLog = new Map();

const sendJson = (response, statusCode, payload) => {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
};

const readJsonBody = async (request) => {
  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  let rawBody = "";
  for await (const chunk of request) {
    rawBody += chunk;
    if (rawBody.length > 20_000) {
      throw new Error("Request body is too large");
    }
  }

  return rawBody ? JSON.parse(rawBody) : {};
};

const sanitizeMessage = (value) =>
  typeof value === "string" ? value.trim().slice(0, MAX_MESSAGE_LENGTH) : "";

const sanitizeHistory = (history) =>
  Array.isArray(history)
    ? history
      .slice(-MAX_HISTORY_MESSAGES)
      .map((message) => ({
        role: message?.role === "user" ? "user" : "bot",
        text: sanitizeMessage(message?.text),
      }))
      .filter((message) => message.text)
    : [];

const getClientIp = (request) => {
  const forwarded = request.headers?.["x-forwarded-for"];
  return (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0])
    || request.socket?.remoteAddress
    || "unknown";
};

const isRateLimited = (request) => {
  const now = Date.now();
  const clientIp = getClientIp(request);
  const recentRequests = (requestLog.get(clientIp) || []).filter((time) => now - time < 60_000);

  if (recentRequests.length >= MAX_REQUESTS_PER_MINUTE) {
    requestLog.set(clientIp, recentRequests);
    return true;
  }

  requestLog.set(clientIp, [...recentRequests, now]);
  return false;
};

export const createLuxaraChatHandler = ({
  apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY,
} = {}) => async (request, response) => {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    sendJson(response, 503, { error: "Luxara Assistant is temporarily unavailable." });
    return;
  }

  if (isRateLimited(request)) {
    sendJson(response, 429, { error: "Please wait a moment before sending another message." });
    return;
  }

  try {
    const body = await readJsonBody(request);
    const userMessage = sanitizeMessage(body.userMessage);
    const history = sanitizeHistory(body.history);

    if (!userMessage) {
      sendJson(response, 400, { error: "Please enter a message." });
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      generationConfig: {
        temperature: 0.45,
        topP: 0.9,
        maxOutputTokens: 320,
      },
    });

    const result = await model.generateContent(buildLuxaraPrompt({ userMessage, history }));
    const reply = (await result.response).text().trim();
    sendJson(response, 200, { reply });
  } catch (error) {
    console.error("Luxara Assistant API error:", error?.message || error);
    sendJson(response, 500, {
      error: "Luxara Assistant could not connect right now. Please try again shortly.",
    });
  }
};

export default createLuxaraChatHandler();
