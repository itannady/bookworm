import React, { useState, useEffect, useRef } from "react";
import {
  ResultContainer,
  Row,
  CarouselWrapper,
  CardContainer,
  BookCover,
  BookContent,
  LeftIcon,
  RightIcon,
} from "./BookResultsStyles";

function BookResults(props) {
  const rowRef = useRef();
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const baseRowWidth = 1000;

  const handlePrevClick = () => {
    if (currentGroupIndex > 0) {
      setCurrentGroupIndex(currentGroupIndex - 1);
    } else {
      setCurrentGroupIndex(Math.floor(props.books.length / 5) - 1);
    }
  };

  const handleNextClick = () => {
    if (currentGroupIndex < Math.floor(props.books.length / 5) - 1) {
      setCurrentGroupIndex(currentGroupIndex + 1);
    } else {
      setCurrentGroupIndex(0);
    }
  };

  useEffect(() => {
    const row = rowRef.current;
    row.style.transform = `translateX(-${baseRowWidth * currentGroupIndex}px)`;
  }, [currentGroupIndex]);

  const renderBooks = () => {
    let bookNodes = [];

    for (let i = 0; i < props.books.length; i++) {
      bookNodes.push(
        <CarouselWrapper key={i}>
          {props.books.slice(i * 5, i * 5 + 5).map((book, index) => (
            <CardContainer key={index}>
              <BookCover>
                {book.thumbnail && (
                  <img src={`${book.thumbnail}`} alt={book.title} />
                )}
              </BookCover>
            </CardContainer>
          ))}
        </CarouselWrapper>
      );
    }

    return bookNodes;
  };

  return (
    <>
      <ResultContainer>
        <LeftIcon onClick={handlePrevClick} />
        <Row ref={rowRef} bookCount={props}>
          {renderBooks()}
        </Row>
        <RightIcon onClick={handleNextClick} />
      </ResultContainer>
    </>
  );
}

export default BookResults;
