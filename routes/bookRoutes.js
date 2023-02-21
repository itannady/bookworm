const express = require("express");
const router = express.Router();
const booksController = require("../controllers/bookController");

// search a book
router.get("/search/:query", booksController.searchBooks);

// add a new book
router.post("/library", booksController.addBook);

// delete book
router.delete("/delete/:title", booksController.deleteBook);

module.exports = router;
