import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { HeroContainer, ContentWrapper } from "./HeroStyles";

function Hero(props) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSearch(query);
  };

  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <h1>
            Discover your next <br /> favorite book
          </h1>
          <h3>Enter a book you like and we'll find some new reads for you</h3>
          <SearchBar
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            query={query}
          />
        </ContentWrapper>
      </HeroContainer>
    </>
  );
}

export default Hero;
