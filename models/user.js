const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  gender: String,
  dob: String,
  weight: Number,
  height: Number,

  diabetes: Boolean,
  cholesterol: String,
  bloodPressure: String,

  extraParameters: [
    {
      parameter: String,
      value: String,
      unit: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);