const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  ingredients: [String],
  imageUrl: String,
});

const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
