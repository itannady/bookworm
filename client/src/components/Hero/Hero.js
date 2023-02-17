import React from "react";
import {
  HeroContainer,
  ContentWrapper,
  SearchBar,
  SearchIcon,
} from "./HeroStyles";

function Hero() {
  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <h1>Discover your next favorite book</h1>
          <h4>Enter a book you like and we'll find some new books for you</h4>
          <SearchBar>
            <SearchIcon />
            <input type="search" placeholder="Search for a book"></input>
          </SearchBar>
        </ContentWrapper>
      </HeroContainer>
    </>
  );
}

export default Hero;
