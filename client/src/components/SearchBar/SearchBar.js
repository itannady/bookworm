import React from "react";
import { SearchBarContainer, SearchIcon } from "./SearchBarStyles";

function SearchBar(props) {
  return (
    <>
      <SearchBarContainer onSubmit={props.handleSubmit}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a book"
          value={props.query}
          onChange={props.handleChange}
        ></input>
        <button type="submit">Search</button>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
