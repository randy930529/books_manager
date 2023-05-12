import { authors, books } from "../resolvers.js";

const updateBook = (root, arg) => {
  const bookIndex = books.findIndex((book) => book.id === arg.id);

  if (bookIndex === -1) {
    return null;
  }

  const nameAuthor = arg.author;
  const indexAuthor = authors.findIndex((author) => author.name === nameAuthor);

  if (indexAuthor === -1) {
    return null;
  }

  const book = books[bookIndex];
  const updatedBook = { ...book, ...arg, author: authors[indexAuthor] };
  books[bookIndex] = updatedBook;

  return updatedBook;
};

export default updateBook;
