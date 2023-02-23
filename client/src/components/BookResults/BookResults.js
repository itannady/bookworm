import React, { useState, useRef, useEffect } from "react";
import {
  ResultContainer,
  Row,
  CardContainer,
  BookCover,
  BookmarkTag,
  LeftIcon,
  RightIcon,
  AddBookmarkIcon,
  CheckedIcon,
} from "./BookResultsStyles";

function BookResults({ books, onAddToList, handleDeleteBook }) {
  const rowRef = useRef();
  // tracks books on the display
  const [currentGroup, setCurrentGroup] = useState(0);
  // updates the current group to display the previous 5 books
  const handlePrevClick = () => {
    const nextIndex = currentGroup - 5;
    setCurrentGroup(nextIndex < 0 ? books.length - 5 : nextIndex);
  };
  // updates the current group to display the next 5 books
  const handleNextClick = () => {
    setCurrentGroup((currentGroup + 5) % books.length);
  };
  // show only 5 books
  const visibleBooks = books.slice(currentGroup, currentGroup + 5);

  // updates the bookmark status of a book when the bookmark icon is clicked
  const [bookmarkStatus, setBookmarkStatus] = useState(books.map(() => false));

  const handleBookmarkClick = async (index) => {
    const newBookmarkStatus = [...bookmarkStatus];
    newBookmarkStatus[index] = !newBookmarkStatus[index];
    setBookmarkStatus(newBookmarkStatus);
    const book = books[index];
    // adds/removes the book from a list depending on the bookmark status
    if (newBookmarkStatus[index]) {
      try {
        await onAddToList(book);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await handleDeleteBook(book.title);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <ResultContainer>
        {visibleBooks.length > 0 && (
          <Row ref={rowRef} currentGroup={currentGroup}>
            <LeftIcon onClick={handlePrevClick} />
            {visibleBooks.map((book, index) => (
              <CardContainer key={index}>
                <BookCover>
                  {book.thumbnail && (
                    <img src={`${book.thumbnail}`} alt={book.title} />
                  )}
                  <BookmarkTag>
                    <span>
                      {bookmarkStatus[books.indexOf(book)] ? (
                        <CheckedIcon
                          onClick={() =>
                            handleBookmarkClick(books.indexOf(book))
                          }
                        />
                      ) : (
                        <AddBookmarkIcon
                          onClick={() =>
                            handleBookmarkClick(books.indexOf(book))
                          }
                        />
                      )}
                    </span>
                  </BookmarkTag>
                </BookCover>
              </CardContainer>
            ))}
            <RightIcon onClick={handleNextClick} />
          </Row>
        )}
        {!visibleBooks.length && <div></div>}
      </ResultContainer>
    </>
  );
}

export default BookResults;
