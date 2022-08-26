const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

const User = require("../models/userSchema.model");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server starts running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("error:", err);
  });
