const genAI = require("../config/AiConfig");

exports.analyzeFood = async (req, res) => {
  try {
    const { image, mimeType } = req.body;

    if (!image) {
      return res.status(400).json({ message: "No image provided" });
    }

    const prompt = `
      You are an expert nutritionist and health assistant. 
      Analyze this image. If it contains food/drinks:
      1. Identify the dish/item name.
      2. List visible and likely ingredients.
      3. Estimate approximate calories per serving.
      4. Estimate protein (g), carbohydrates (g), and fat (g).
      5. Provide a short health suitability check (e.g., suitable for diabetes? high sugar?).
      
      If it is NOT food, respond with "NOT_FOOD".

      Return the response in this clean HTML format (no markdown backticks, just the inner HTML):
      
      <div style="text-align:left; background:#f0f8ff; padding:15px; border-radius:10px; border:1px solid #bce8f1;">
            <b>Food Name:</b> [Name]<br>
            <b>Ingredients:</b> [List]<br>
            <b>Calories:</b> [Value]<br>
            <b>Protein:</b> [Value]<br>
            <b>Carbs:</b> [Value]<br>
            <b>Fat:</b> [Value]<br>
            <br>
            <b>Health Check:</b> [Analysis]<br>
            <small><i>*Values are approximate AI estimates</i></small>
      </div>
    `;

    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

    const contents = [
      {
        inlineData: {
          mimeType: mimeType || "image/jpeg",
          data: base64Data,
        },
      },
      { text: prompt },
    ];

    const response = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
    });

    const text = response.text;

    // if (!text) {
    //     throw new Error("No text returned from AI");
    // }

    // if (text.includes("NOT_FOOD")) {
    //     return res.json({
    //         isFood: false,
    //         html: "<div style='color:red; font-weight:bold;'>❌ This does not look like food. Please scan a food item.</div>"
    //     });
    // }

    console.log("text :>> ", text);

    res.json({ isFood: true, html: text });
  } catch (err) {
    console.error("AI Controler Error Details:", err);
    res.status(500).json({
      error:
        "Unable to analyze the image at the moment. The AI request limit has been reached. Please try again shortly.",
    });
  }
};
