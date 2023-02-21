const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 5050;
require("dotenv").config();
// const API_KEY = process.env.API_KEY;
// const Book = require("./model/Book");
// const axios = require("axios");
const bookRoutes = require("./routes/bookRoutes");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", bookRoutes);

// Connect to MongoDB
const URL = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);

mongoose
  .connect(URL)
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
