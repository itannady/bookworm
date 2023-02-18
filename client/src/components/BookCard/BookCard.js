import React from "react";
import { CardContainer, BookCover, BookContent } from "./BookCardStyles";

function BookCard(props) {
  props.books.map((book) => {});

  return (
    <>
      {props.books.map((book, index) => (
        <CardContainer key={index}>
          <BookCover>
            {book.thumbnail && (
              <img src={`${book.thumbnail}`} alt={book.title} />
            )}
          </BookCover>
          <BookContent>
            <p>{book.title}</p>
            <p>
              {book.authors && book.authors.length > 0
                ? book.authors.join(", ")
                : ""}
            </p>
          </BookContent>
        </CardContainer>
      ))}
    </>
  );
}

export default BookCard;
