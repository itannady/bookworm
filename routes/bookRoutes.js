const express = require("express");
const router = express.Router();
const booksController = require("../controllers/bookController");

// Searching a book
router.get("/search/:query", booksController.searchBooks);

module.exports = router;
