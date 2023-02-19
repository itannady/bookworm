import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  HeadingContent,
  BookList,
  CloseIcon,
} from "./LibModalStyles";

function LibModal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={toggleModal}>Open</button>

      {isOpen && (
        <ModalOverlay>
          <CloseIcon onClick={toggleModal} />
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
