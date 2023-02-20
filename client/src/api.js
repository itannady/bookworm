const API_URL = "http://localhost:5050";

// add book
export const addBookToList = async (book) => {
  try {
    const response = await fetch(`${API_URL}/library`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const newBook = await response.json();
    return newBook;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add book to list");
  }
};

// delete book
export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete book");
  }
};
