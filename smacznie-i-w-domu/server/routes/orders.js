const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/place-order", async (req, res) => {
  const { user, address, meals } = req.body;

  if (!user || !address || !meals || meals.length === 0)
  {
    return res.status(400).send("Invalid order data.");
  }

  try
  {
    const order = new Order({ user, address, meals });
    await order.save();
    res.status(201).send("Order placed successfully.");
  }
  catch (error)
  {
    res.status(500).send("Error placing order.");
  }
});

module.exports = router;