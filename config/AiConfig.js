require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

if (!process.env.GEMINI_API_KEY) {
  console.error("ERROR: GEMINI_API_KEY is missing in .env");
} else {
  console.log("Gemini API Key loaded.");
}

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


module.exports = genAI;