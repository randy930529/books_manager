import { books } from "../resolvers.js";

const deleteBook = (root, arg) => {
  const bookIndex = books.findIndex((book) => book.id === arg.id);

  if (bookIndex === -1) {
    return null;
  }

  const deleteBook = books.splice(bookIndex, 1);

  if (deleteBook.length === 0) {
    return null;
  }

  return deleteBook[0];
};

export default deleteBook;
