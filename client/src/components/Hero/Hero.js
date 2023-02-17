import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { HeroContainer, ContentWrapper } from "./HeroStyles";

function Hero() {
  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <h1>Discover your next favorite book</h1>
          <h4>Enter a book you like and we'll find some new books for you</h4>
          <SearchBar />
        </ContentWrapper>
      </HeroContainer>
    </>
  );
}

export default Hero;
