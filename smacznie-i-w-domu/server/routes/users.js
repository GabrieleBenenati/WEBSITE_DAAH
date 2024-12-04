const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, surname, email, password } = req.body;
  
  try
  {
    const existingUser = await User.findOne({ email });
    if (existingUser)
    {
      return res.status(400).send("A user with this e-mail address already exists, please you another e-mail.");
    }

    const user = new User({ name, surname, email, password });
    await user.save();
    res.status(201).send("Registered user !");
  }

  catch(error)
  {
    res.status(500).send("Registration error.");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try
  {
    const user = await User.findOne({ email, password });
    if (!user)
    {
      return res.status(400).send("Invalid login details.");
    }
    res.status(200).send(user);
  }

  catch (error)
  {
    res.status(500).send("Login error.");
  }
});

module.exports = router;