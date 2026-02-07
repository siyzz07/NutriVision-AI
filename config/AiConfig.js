require("dotenv").config();
// const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const { GoogleGenAI } = require("@google/genai");

if (!process.env.GEMINI_API_KEY) {
  console.error("ERROR: GEMINI_API_KEY is missing in .env");
} else {
  console.log("Gemini API Key loaded.");
}

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//     threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//     threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
//   },
// ];

// const visionModel = genAI.getGenerativeModel({ 
//     model: "gemini-1.5-flash",
//     // safetySettings: safetySettings
// });

module.exports = genAI;