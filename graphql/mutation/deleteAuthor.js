import { authors } from "../resolvers.js";

const deleteAuthor = (root, arg) => {
  const authorIndex = authors.findIndex((author) => author.id === arg.id);

  if (authorIndex === -1) {
    return null;
  }

  const deleteAuthor = authors.splice(authorIndex, 1);

  if (deleteAuthor.length === 0) {
    return null;
  }

  return deleteAuthor[0];
};

export default deleteAuthor;
