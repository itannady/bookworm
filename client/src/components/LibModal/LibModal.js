import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  HeadingContent,
  BookList,
  CloseIcon,
} from "./LibModalStyles";

function LibModal({ isOpen, closeModal }) {
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
              <h2>Hello</h2>
            </BookList>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default LibModal;
