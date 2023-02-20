import axios from "axios";
const API_URL = "http://localhost:5050";

// add book
export const addBookToList = async (book) => {
  try {
    const response = await axios.post(`${API_URL}/library`, book, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add book to list");
  }
};

// delete book
export const deleteBook = async (bookTitle) => {
  try {
    const response = await axios.delete(
      `${API_URL}/delete/${bookTitle}`,
      bookTitle,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete book");
  }
};
