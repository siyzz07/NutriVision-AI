# NutriVision AI – Food Image Nutrition Analyzer 🍽️🤖

NutriVision AI is an AI-powered web application that allows users to **capture food images using their device camera or upload existing images** to receive instant nutritional analysis. The application leverages computer vision and AI-based image recognition to identify food items and extract detailed nutritional information, helping users make informed and healthier dietary choices.

---

## 🚀 Features

- 📸 Capture food images using device camera  
- 🖼️ Upload food images (PNG / JPG)  
- 🤖 AI-powered food recognition  
- 🥗 Identifies food name and ingredients  
- 🔥 Displays calories  
- 💪 Shows proteins, fats, and carbohydrates  
- 📝 Provides a clear nutritional description  
- ⚡ Clean, fast, and user-friendly interface  

---

## 🧠 How It Works

1. User captures or uploads a food image  
2. The image is sent to the backend server  
3. AI analyzes the image using computer vision  
4. Food name and nutritional values are extracted  
5. Results are rendered and displayed to the user  

---

## 🏗️ Architecture

This project follows the **MVC (Model–View–Controller) architecture**, ensuring a clean separation of concerns and improved maintainability.

- **Model** – Handles database schemas and data logic  
- **View** – HTML templates rendered to the user  
- **Controller** – Manages requests, AI processing, and responses  

---

## 🛠️ Tech Stack

### Frontend (View Layer)
- HTML5  
- CSS3  
- JavaScript  
- Responsive UI  

### Backend
- Node.js  
- Express.js  

### AI / Image Analysis
- AI-powered image recognition (Google Gemini API or similar)

### Database (Optional)
- MongoDB  

---

## 📂 Project Structure

```bash
food-check-pro/
│
├── controllers/     # Request handling & business logic
├── models/          # Database schemas & data models
├── routes/          # API & view route definitions
├── views/           # HTML templates (UI layer)
├── public/          # Static assets (CSS, JS, images)
├── uploads/         # Captured & uploaded food images
├── config/          # Configuration files (DB, AI, env)
├── README.md
├── package.json
└── server.js
