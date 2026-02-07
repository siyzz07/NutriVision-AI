require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function check() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      console.log("Checking gemini-1.5-flash...");
      const result = await model.generateContent("Hello");
      console.log("Success with gemini-1.5-flash:", result.response.text());
  } catch (e) {
      console.error("Failed with gemini-1.5-flash:", e.message);
  }
}

check();
