import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  HeadingContent,
  BookList,
  BookCard,
  BookCover,
  CloseIcon,
  DeleteIcon,
} from "./ModalStyles";

function Modal({ isOpen, closeModal, bookList, handleDeleteBook }) {
  if (!isOpen) {
    return null;
  }

  const handleDelete = async (bookId) => {
    try {
      await handleDeleteBook(bookId);
    } catch (error) {
      console.error(error);
    }
  };

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
                  <DeleteIcon onClick={() => handleDelete(book.id)} />
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
