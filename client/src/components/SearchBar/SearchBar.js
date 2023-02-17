import React from "react";
import { SearchBarContainer, SearchIcon } from "./SearchBarStyles";

function SearchBar() {
  return (
    <>
      <SearchBarContainer>
        <SearchIcon />
        <input type="search" placeholder="Search for a book"></input>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
