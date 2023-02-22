import React from "react";
import { SearchBarContainer, SearchIcon } from "./SearchBarStyles";
import { PrimaryBtn } from "../Buttons/ButtonStyles";
import { SearchInput } from "../Input/InputStyles";

function SearchBar(props) {
  return (
    <>
      <SearchBarContainer onSubmit={props.handleSubmit}>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Search for a book"
          value={props.query}
          onChange={props.handleChange}
        ></SearchInput>
        <PrimaryBtn className="searchBtn" type="submit">
          Search
        </PrimaryBtn>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
