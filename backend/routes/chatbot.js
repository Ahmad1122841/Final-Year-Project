import express from "express";
import OpenAI from "openai";
import { searchCompanyData } from "../utils/companySearch.js";
import { companyData } from "../data/companyData.js";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5000",
    "X-Title": "WearWell Ecommerce Chatbot",
  },
});

router.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage || typeof userMessage !== "string") {
      return res.status(400).json({
        output: {
          role: "assistant",
          content: "Please provide a valid message.",
        },
      });
    }

    // Get relevant company context
    const relevantContext = searchCompanyData(userMessage);

    //  If nothing found, return friendly message
    if (!relevantContext) {
      return res.json({
        output: {
          role: "assistant",
          content:
            "Sorry, I couldn't find that product or information at WearWell. Please try another product name or category.",
        },
      });
    }

    const systemPrompt = `
You are a professional customer support assistant for ${companyData.name}, an ecommerce store.

STRICT RULES:
- Answer ONLY using the provided company information.
- Do NOT make up products or prices.
- If information is missing, say: "I don't have that information."

Company Information:
${relevantContext}
`;

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.3,
    });

    res.json({
      output: completion.choices[0].message,
    });

  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({
      output: {
        role: "assistant",
        content: "Something went wrong. Please try again later.",
      },
    });
  }
});

export default router;