const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require("path");
const mealsRouter = require("./routes/meals");
const userRouter = require("./routes/users");
const orderRouter = require("./routes/orders");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/smacznie", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api", mealsRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.listen(PORT, () => console.log(`The server runs on port ${PORT}`));