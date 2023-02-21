const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
  },
  authors: {
    type: [String],
  },
  description: {
    type: String,
  },
  isbn: {
    type: String,
  },
  categories: {
    type: [String],
  },
  thumbnail: {
    type: String,
  },
  averageRating: {
    type: Number,
  },
  ratingsCount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Book", bookSchema);
