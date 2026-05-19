import { GoogleGenerativeAI } from "@google/generative-ai";
import { ALL_PRODUCTS, BEST_SELLERS, GIFT_SETS, NEW_ARRIVALS } from "../data/products";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const WHATSAPP_NUMBER = "923147253080";

let genAI = null;

if (API_KEY && API_KEY !== "your_gemini_api_key_here") {
  genAI = new GoogleGenerativeAI(API_KEY);
}

const formatProduct = (product) => {
  const stock = product.inStock ? "In stock" : "Out of stock";
  const originalPrice = product.originalPrice
    ? `, original Rs. ${product.originalPrice.toLocaleString()}`
    : "";

  return [
    `${product.name}`,
    `category: ${product.category}`,
    `finish: ${product.finish}`,
    `price: Rs. ${product.price.toLocaleString()}${originalPrice}`,
    `tag: ${product.tag || "None"}`,
    `status: ${stock}`,
    `description: ${product.description || "No description"}`,
  ].join(" | ");
};

const productCatalog = ALL_PRODUCTS.map(formatProduct).join("\n");

const siteKnowledge = `
LUXARA WEBSITE KNOWLEDGE

Brand:
- Luxara is a luxury jewelry e-commerce store for anti-tarnish stainless steel jewelry.
- Core promise: waterproof, skin-safe, anti-tarnish, everyday wearable luxury.
- Materials: Stainless Steel 316L with PVD finish where applicable.
- Style: premium, warm, concise, helpful, polished.

Important routes/pages:
- Home: / 
- Shop All: /shop
- New Arrivals: /new-arrivals
- Gift Sets: /gift-sets
- About: /about
- Our Story / Brand Legacy: /our-story
- Contact: /contact
- FAQs: /faqs
- Jewelry Care: /jewelry-care
- Track Order: /track-order

Shopping and order flow:
- Customers can browse products and add to cart.
- Customers can order on WhatsApp.
- WhatsApp number: +${WHATSAPP_NUMBER}
- Cash on Delivery is available.
- Free shipping above Rs. 2,000.
- Shipping fee shown in cart: Rs. 200 when free shipping is not unlocked.
- For unavailable/out-of-stock products, tell customers to message on WhatsApp for availability or restock updates.

Care and durability:
- Jewelry is waterproof and suitable for daily wear.
- Customers can wear it in shower, gym, pool, beach, and rain.
- Clean with a soft microfiber cloth.
- Avoid harsh chemicals, bleach, abrasive cloths, and direct perfume/hairspray on the jewelry.
- Store in the Luxara box or a small zip pouch.
- Guarantee: if color changes within 6 months of normal wear, Luxara replaces it.

Collections:
- Best sellers: ${BEST_SELLERS.map((product) => product.name).join(", ")}
- New arrivals: ${NEW_ARRIVALS.map((product) => product.name).join(", ")}
- Gift sets: ${GIFT_SETS.map((product) => product.name).join(", ")}

Full product catalog:
${productCatalog}
`;

const buildPrompt = ({ userMessage, history = [] }) => {
  const recentHistory = history
    .slice(-8)
    .map((message) => `${message.role === "user" ? "Customer" : "Luxara Assistant"}: ${message.text}`)
    .join("\n");

  return `
You are Luxara Assistant, the official AI assistant for Luxara.

Rules:
- Use the Luxara website knowledge below as your source of truth.
- Always answer in polished, professional English by default.
- Do not use Urdu, Roman Urdu, or Hinglish unless the customer explicitly asks you to reply in that language.
- Be concise, premium, and helpful. Keep most answers under 5 short sentences.
- Do not invent products, prices, stock, discounts, delivery promises, or policies.
- If the customer wants to buy, guide them to add to cart or order on WhatsApp at +${WHATSAPP_NUMBER}.
- If the customer asks about unrelated topics, politely redirect to Luxara jewelry, orders, care, shipping, or support.
- If the customer asks for medical, legal, or financial advice, do not provide professional advice.

${siteKnowledge}

Recent conversation:
${recentHistory || "No previous conversation."}

Customer question:
${userMessage}

Luxara Assistant answer:
`;
};

export async function askLuxaraAssistant({ userMessage, history = [] }) {
  if (!genAI) {
    console.warn("Gemini API key is not configured. Expected VITE_GEMINI_API_KEY in .env.");
    return "Assistant abhi connect nahi hua. Please .env mein VITE_GEMINI_API_KEY set karke dev server restart karein.";
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.45,
        topP: 0.9,
        maxOutputTokens: 320,
      },
    });

    const result = await model.generateContent(buildPrompt({ userMessage, history }));
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, Luxara Assistant se connect karte waqt issue aa gaya. Please thori der baad try karein ya WhatsApp par message kar dein.";
  }
}

export async function askGemini(prompt) {
  return askLuxaraAssistant({ userMessage: prompt });
}
