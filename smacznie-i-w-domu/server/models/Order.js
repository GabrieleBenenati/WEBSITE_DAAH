const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user:
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
  },

  address: { type: String, required: true },
  meals: [
    {
      mealId: { type: mongoose.Schema.Types.ObjectId, ref: "Meal" },
      name: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;