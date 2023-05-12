import { authors } from "../resolvers.js";

const updateAuthor = (root, arg) => {
  const indexAuthor = authors.findIndex((author) => author.id === arg.id);

  if (indexAuthor === -1) {
    return null;
  }

  const author = authors[indexAuthor];
  const updatedAuthor = { ...author, ...arg };
  authors[indexAuthor] = updatedAuthor;

  return updatedAuthor;
};

export default updateAuthor;
