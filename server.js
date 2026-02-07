const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require("path");
let env =require ('dotenv')

env.config()

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Serve login.html
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Serve register.html
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "register.html"));
});

// Serve home.html
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Serve profile.html
app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "profile.html"));
});

// Serve report.html (stats)
app.get("/report", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "report.html"));
});

// Root redirects to login
app.get("/", (req, res) => {
  res.redirect("/login");
});

app.use("/api/auth", require("./routes/router"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/login`);
});
