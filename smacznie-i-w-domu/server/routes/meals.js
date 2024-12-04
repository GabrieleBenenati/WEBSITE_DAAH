const express = require("express");
const router = express.Router();
const Meal = require("../models/Meal");

router.get("/meals", async (req, res) => {
  try
  {
    const meals = await Meal.find();
    res.json(meals);
  }

  catch (error)
  {
    res.status(500).json({ error: "Nie udało się pobrać posiłków" });
  }
});

module.exports = router;