import React, { useState } from "react";
import axios from "axios";
import { SearchBarContainer, SearchIcon } from "./SearchBarStyles";

function SearchBar() {
  const API_URL = "http://localhost:5050";

  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    // make a GET request to the backend
    axios
      .get(`${API_URL}/books/search/${query}`)
      .then((result) => {
        setBooks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <SearchBarContainer>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a book"
          value={query}
          onChange={handleQueryChange}
        ></input>
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </SearchBarContainer>
      {books.map((book) => (
        <div key={book.id}>
          <img src={book.thumbnail} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.authors.join(", ")}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </>
  );
}

export default SearchBar;
