const API_URL = "http://localhost:5050";

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
