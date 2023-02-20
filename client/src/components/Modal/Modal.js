import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  HeadingContent,
  BookList,
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
              <ul>
                {bookList.map((book) => (
                  <li key={book.id}>{book.title}</li>
                ))}
              </ul>
            </BookList>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default Modal;
