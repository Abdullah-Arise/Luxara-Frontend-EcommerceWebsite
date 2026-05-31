const REQUEST_TIMEOUT_MS = 25_000;

export async function askLuxaraAssistant({ userMessage, history = [] }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userMessage, history }),
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok || !payload.reply) {
      throw new Error(payload.error || "Luxara Assistant request failed.");
    }

    return payload.reply;
  } catch (error) {
    console.error("Luxara Assistant request error:", error);
    return "Sorry, Luxara Assistant could not connect right now. Please try again shortly or message us on WhatsApp for quick help.";
  } finally {
    clearTimeout(timeout);
  }
}

export async function askGemini(prompt) {
  return askLuxaraAssistant({ userMessage: prompt });
}
