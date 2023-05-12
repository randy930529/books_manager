import { UserInputError } from "apollo-server";
import { authors, books } from "../resolvers.js";
import { v4 as uuidv4 } from "uuid";

const createBook = (root, arg) => {
  const nameAuthor = arg.author;
  const getAuthor = authors.find((author) => author.name === nameAuthor);

  if (!getAuthor) {
    throw new UserInputError(`Author ${nameAuthor} not found among authors.`);
  }

  const newBook = { ...arg, author: getAuthor, id: uuidv4() };
  books.push(newBook);
  return newBook;
};

export default createBook;
