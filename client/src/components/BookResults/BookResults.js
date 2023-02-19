import React, { useState, useEffect, useRef } from "react";
import {
  ResultContainer,
  Row,
  CardContainer,
  BookCover,
  BookContent,
  LeftIcon,
  RightIcon,
} from "./BookResultsStyles";

function BookResults(props) {
  const rowRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      currentIndex === 0 ? props.books.length - 1 : currentIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex === props.books.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    rowRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <>
      <ResultContainer>
        <LeftIcon onClick={handlePrevClick} />
        <Row ref={rowRef}>
          {props.books.map((book, index) => (
            <CardContainer key={index} active={index === currentIndex}>
              <BookCover>
                {book.thumbnail && (
                  <img src={`${book.thumbnail}`} alt={book.title} />
                )}
              </BookCover>
              {/* <BookContent>
                <p className="title">{book.title}</p>
                <p className="author">
                  {book.authors && book.authors.length > 0
                    ? book.authors.join(", ")
                    : ""}
                </p>
              </BookContent> */}
            </CardContainer>
          ))}
        </Row>
        <RightIcon onClick={handleNextClick} />
      </ResultContainer>
    </>
  );
}

export default BookResults;
