import React, { useState, useRef } from "react";
import {
  ResultContainer,
  Row,
  CardContainer,
  BookCover,
  BookContent,
  BookmarkTag,
  LeftIcon,
  RightIcon,
  BookmarkIcon,
} from "./BookResultsStyles";

function BookResults({ books, onAddToList }) {
  const rowRef = useRef();
  // tracks the first group of books on the display
  const [currentGroup, setCurrentGroup] = useState(0);

  // loops back to the starting group when it reaches the end
  const handlePrevClick = () => {
    const nextIndex = currentGroup - 5;
    setCurrentGroup(nextIndex < 0 ? books.length - 5 : nextIndex);
  };

  // increments the current group by 5 and loops back when it reaches the end
  const handleNextClick = () => {
    setCurrentGroup((currentGroup + 5) % books.length);
  };

  // show only 5 books
  const visibleBooks = books.slice(currentGroup, currentGroup + 5);

  return (
    <>
      <ResultContainer>
        {visibleBooks.length > 0 ? (
          <Row ref={rowRef} currentGroup={currentGroup}>
            <LeftIcon onClick={handlePrevClick} />
            {visibleBooks.map((book, index) => (
              <CardContainer key={index}>
                <BookCover>
                  {book.thumbnail && (
                    <img src={`${book.thumbnail}`} alt={book.title} />
                  )}
                  <BookmarkTag onClick={() => onAddToList(book)}>
                    <span>
                      <BookmarkIcon />
                      Add to Library
                    </span>
                  </BookmarkTag>
                </BookCover>
              </CardContainer>
            ))}
            <RightIcon onClick={handleNextClick} />
          </Row>
        ) : (
          <p>Loading books...</p>
        )}
      </ResultContainer>
    </>
  );
}

export default BookResults;
