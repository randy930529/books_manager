import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "./graphql/resolvers.js";

const typeDefs = gql`
  scalar Date

  type Book {
    title: String!
    author: Author!
    isbn: String!
    description: String
    year: Int!
    photo: String
    id: ID!
  }

  type Author {
    name: String!
    lastName: String!
    about: String
    birthDate: Date!
    photo: String
    id: ID!
  }

  type Query {
    allBooks: [Book]!
    allAuthors: [Author]!
  }

  type Mutation {
    createBook(
      title: String!
      author: String!
      isbn: String!
      description: String
      year: String!
      photo: String
    ): Book
    createAuthor(
      name: String!
      lastName: String!
      about: String
      birthDate: String!
      photo: String
      id: ID!
    ): Author
    updateBook(
      title: String
      author: String
      isbn: String
      description: String
      year: String
      photo: String
      id: ID!
    ): Book
    updateAuthor(
      name: String
      lastName: String
      about: String
      birthDate: String
      photo: String
      id: ID!
    ): Author
    deleteBook(id: ID!): Book
    deleteAuthor(id: ID!): Author
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
