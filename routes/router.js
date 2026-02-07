const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);

const { analyzeFood } = require("../controllers/aiController");
router.post("/scan", analyzeFood);

module.exports = router;