const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  averageRating: {
    type: Number,
    required: true,
  },
  ratingsCount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
