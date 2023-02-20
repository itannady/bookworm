import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import BookResults from "./components/BookResults/BookResults";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { ShelfImg } from "./components/Shelf/ShelfStyles";
import Modal from "./components/Modal/Modal";
import { addBookToList, deleteBook } from "./bookServices";

function App() {
  const API_URL = "http://localhost:5050";

  const [books, setBooks] = useState([]);
  const [bookList, setBookList] = useState([]);

  // library modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (query) => {
    // make a GET request to the backend
    axios
      .get(`${API_URL}/search/${query}`)
      .then((result) => {
        setBooks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // add book to list
  const handleAddToList = async (book) => {
    try {
      const newBook = await addBookToList(book);
      setBookList((prevBooks) => [...prevBooks, newBook]);
    } catch (error) {
      console.error(error);
    }
  };

  // remove book from list
  const handleDeleteBook = async (bookTitle) => {
    try {
      await deleteBook(bookTitle);
      setBookList((prevBookList) =>
        prevBookList.filter((book) => book.title !== bookTitle)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar openModal={() => setIsModalOpen(true)} />
      <Hero handleSearch={handleSearch} />
      <BookResults books={books} onAddToList={handleAddToList} />
      <ShelfImg />
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        bookList={bookList}
        handleDeleteBook={handleDeleteBook}
      />
    </>
  );
}

export default App;
