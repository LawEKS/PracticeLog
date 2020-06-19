const mongoose = require("../db")

const Practice = new mongoose.Schema({
  title: { type: String, trim: true, default: "" },
  duration: { type: Number, min: 1 },
  data: { type: Date, required: true },
})

module.exports = mongoose.model("Practice", Practice)
