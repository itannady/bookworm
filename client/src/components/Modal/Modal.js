import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  HeadingContent,
  BookList,
  BookCard,
  BookCover,
  CloseIcon,
} from "./ModalStyles";

function Modal({ isOpen, closeModal, bookList }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <CloseIcon onClick={closeModal} />
          <ModalContainer>
            <HeadingContent>
              <h2>Library</h2>
            </HeadingContent>
            <BookList>
              {bookList.map((book) => (
                <BookCard key={book.id}>
                  <BookCover>
                    {book.thumbnail && (
                      <img src={`${book.thumbnail}`} alt={book.title} />
                    )}
                  </BookCover>
                  <p>{book.title}</p>
                  {book.author && <p> {book.author[0]}</p>}
                </BookCard>
              ))}
            </BookList>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default Modal;
