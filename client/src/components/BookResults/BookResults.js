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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const baseRowWidth = 1000;

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.books.length - 1);
      setCurrentGroupIndex(Math.floor((props.books.length - 1) / 5));
    } else {
      setCurrentIndex(currentIndex - 1);
      if (currentIndex % 5 === 0) {
        setCurrentGroupIndex(currentGroupIndex - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (currentIndex === props.books.length - 1) {
      setCurrentIndex(0);
      setCurrentGroupIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex % 5 === 4) {
        setCurrentGroupIndex(currentGroupIndex + 1);
      }
    }
  };

  useEffect(() => {
    const row = rowRef.current;
    row.style.transform = `translateX(-${baseRowWidth * currentGroupIndex}px)`;
  }, [currentGroupIndex]);
  const renderBooks = () => {
    let bookNodes = [];

    for (let i = 0; i < Math.ceil(props.books.length / 5); i++) {
      bookNodes.push(
        <CarouselWrapper key={i}>
          {props.books.slice(i * 5, i * 5 + 5).map((book, index) => (
            <CardContainer key={index} active={currentIndex === i * 5 + index}>
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
        <Row ref={rowRef}>{renderBooks()}</Row>
        <RightIcon onClick={handleNextClick} />
      </ResultContainer>
    </>
  );
}

export default BookResults;
