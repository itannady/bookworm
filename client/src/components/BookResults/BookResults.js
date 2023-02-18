import React from "react";
import {
  ResultContainer,
  Row,
  CardContainer,
  BookCover,
  BookContent,
} from "./BookResultsStyles";

function BookResults(props) {
  return (
    <>
      <ResultContainer>
        <Row>
          {props.books.map((book, index) => (
            <CardContainer key={index}>
              <BookCover>
                {book.thumbnail && (
                  <img src={`${book.thumbnail}`} alt={book.title} />
                )}
              </BookCover>
              <BookContent>
                <p className="title">{book.title}</p>
                <p className="author">
                  {book.authors && book.authors.length > 0
                    ? book.authors.join(", ")
                    : ""}
                </p>
              </BookContent>
            </CardContainer>
          ))}
        </Row>
      </ResultContainer>
    </>
  );
}

export default BookResults;
