import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookResults from "./components/BookResults/BookResults";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { ShelfImg } from "./components/Shelf/ShelfStyles";
import Modal from "./components/Modal/Modal";
import { addBookToList } from "./api";
import { BookList } from "./components/Modal/ModalStyles";

function App() {
  const API_URL = "http://localhost:5050";

  const [books, setBooks] = useState([]);
  const [bookList, setBookList] = useState([]);

  const handleSearch = (query) => {
    // make a GET request to the backend
    axios
      .get(`${API_URL}/search/${query}`)
      .then((result) => {
        console.log(result);
        setBooks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddToList = async (book) => {
    try {
      const newBook = await addBookToList(book);
      setBookList((prevBooks) => [...prevBooks, newBook]);
      console.log(bookList);
    } catch (error) {
      console.error(error);
    }
  };

  // library modal
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      />
    </>
  );
}

export default App;
