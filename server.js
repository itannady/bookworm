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
app.use("/books", bookRoutes);

// Connect to MongoDB
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// API calls
// app.get("/api/search/:query", async (req, res) => {
//   try {
//     const response = await axios.get(
//       `https://www.googleapis.com/books/v1/volumes?q=${req.params.query}&key=${API_KEY}`
//     );
//     const books = response.data.items.map((item) => {
//       const book = new Book({
//         title: item.volumeInfo.title,
//         author: item.volumeInfo.authors
//           ? item.volumeInfo.authors.join(", ")
//           : "Unknown",
//         description: item.volumeInfo.description,
//         publishedDate: item.volumeInfo.publishedDate,
//         imageLinks: item.volumeInfo.imageLinks,
//       });
//       return book;
//     });
//     res.json(books);
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ message: "An error occurred while searching for books." });
//   }
// });
