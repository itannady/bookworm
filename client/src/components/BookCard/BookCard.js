import React from "react";
import { CardContainer, BookCover, BookContent } from "./BookCardStyles";

function BookCard() {
  return (
    <>
      <CardContainer>
        <BookCover>
          <img src="/images/bookCover.jpg" alt="bookCover" />
        </BookCover>
        <BookContent>
          <p>Harry Potter</p>
          <p>J.K. Rowling</p>
        </BookContent>
      </CardContainer>
    </>
  );
}

export default BookCard;
