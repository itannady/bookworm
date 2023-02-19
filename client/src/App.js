import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import BookResults from "./components/BookResults/BookResults";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { ShelfImg } from "./components/Shelf/ShelfStyles";

function App() {
  const API_URL = "http://localhost:5050";

  const [books, setBooks] = useState([]);

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

  return (
    <>
      <Navbar />
      <Hero handleSearch={handleSearch} />
      <BookResults books={books} />
      <ShelfImg />
    </>
  );
}

export default App;
