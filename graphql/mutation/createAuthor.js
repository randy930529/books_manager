import { authors } from "../resolvers.js";

const createAuthor = (root, arg) => {
  const newAuthor = { ...arg };
  authors.push(newAuthor);
  return newAuthor;
};

export default createAuthor;
