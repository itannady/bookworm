const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  publishedDate: String,
  imageLinks: Object,
});

module.exports = mongoose.model("Book", bookSchema);
