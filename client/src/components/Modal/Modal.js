import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  HeadingContent,
  BookList,
  BookCard,
  BookCover,
  BookContent,
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
                <BookCard key={book._id}>
                  <DeleteIcon onClick={() => handleDelete(book.title)} />
                  <BookCover>
                    {book.thumbnail && (
                      <img src={`${book.thumbnail}`} alt={book.title} />
                    )}
                  </BookCover>
                  <BookContent>
                    <p className="title">{book.title}</p>
                    {book.author && <p> {book.author}</p>}
                  </BookContent>
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
