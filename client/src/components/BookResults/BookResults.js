import React from "react";
import {
  Row,
  CardContainer,
  BookCover,
  BookContent,
} from "./BookResultsStyles";

function BookResults(props) {
  return (
    <>
      <Row>
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
      </Row>
    </>
  );
}

export default BookResults;
