import { GraphQLScalarType, Kind } from "graphql";
import createBook from "./mutation/createBook.js";
import createAuthor from "./mutation/createAuthor.js";
import updateBook from "./mutation/updateBook.js";
import updateAuthor from "./mutation/updateAuthor.js";
import deleteBook from "./mutation/deleteBook.js";
import deleteAuthor from "./mutation/deleteAuthor.js";

////////////////////////
export const books = [
  {
    id: 1,
    title: "The Awakening",
    author: { name: "Joseth" },
    isbn: "464656465654",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
    year: "1999",
    photo: "",
  },

  {
    id: 2,
    title: "City of Glass",
    author: { name: "Joseth" },
    isbn: "464656465654",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?",
    year: "1939",
    photo: "",
  },
];

export const authors = [
  {
    id: 1,
    name: "Joseth",
    lastName: "Guerrero",
    about:
      "Que poder!!! El archivo se vuelve gigante y difícil de mantener. Me gustaría que refactorizaras para saber cómo tendría esos esquemas limpios y separados. Mil gracias!!!",
    birthDate: "05/29/1993",
    photo: "",
  },

  {
    id: 2,
    name: "Rodrigo",
    lastName: "Abregu",
    about:
      "Muchas gracias Midu querido. Hace 4 meses atrás, quise implementar GraphQL para una API sencilla que hice sobre anime para practicar, y me pareció muy complejo. Hoy, después de esos 4 meses, volví a ver esto y me pareció super simple y una explicación genial",
    birthDate: "10/03/1990",
    photo: "https://www.youtube.com/channel/UCG9zM9ZZtQ1xfFkuxadZlEQ",
  },
];
////////////////////////

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",

  serialize(value) {
    if (new Date(value) instanceof Date) {
      return new Date(value).getTime(); // Convert outgoing Date to integer for JSON
    }

    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
  },

  parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }

    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});

export const resolvers = {
  Date: dateScalar,
  Query: {
    allBooks: () => books,
    allAuthors: () => authors,
  },
  Mutation: {
    createBook: createBook,
    createAuthor: createAuthor,
    updateBook: updateBook,
    updateAuthor: updateAuthor,
    deleteBook: deleteBook,
    deleteAuthor: deleteAuthor,
  },
};
