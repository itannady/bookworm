const express = require("express");
const router = express.Router();
const booksController = require("../controllers/bookController");

// Searching a book
router.get("/search/:query", booksController.searchBooks);

// Add a new book
router.post("/library", booksController.addBook);

// Delete book
router.delete("/delete/:id", booksController.deleteBook);

module.exports = router;
