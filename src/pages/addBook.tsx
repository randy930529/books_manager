import Link from "next/link";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form``;

const StyledLabel = styled.label``;

const CREATE_BOOK = gql`
  mutation CreateBook(
    $title: String!
    $author: String!
    $isbn: String!
    $description: String!
    $year: Int!
    $photo: String!
  ) {
    createBook(
      data: { message: "Create book successfully...!", title: $title }
    ) {
      id
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation UpdateBook(
    $title: String!
    $author: String!
    $isbn: String!
    $description: String!
    $year: Int!
    $photo: String!
  ) {
    updateBook(
      id: $id
      data: {
        message: "Update book successfully...!"
        title: $title
        author: $author
      }
    ) {
      id
    }
  }
`;

const AddBook = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const [createBook] = useMutation(CREATE_BOOK);
  const [updateBook] = useMutation(UPDATE_BOOK);

  const [book, setBook] = useState({
    photo: "",
    title: "",
    author: "",
    isbn: "",
    description: "",
    year: "",
  });

  const handleOnChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try {
      if (id) {
        updateBook({ variables: { ...book } });
        e.preventDefault();
      } else {
        createBook({ variables: { ...book } });
        e.preventDefault();
      }
    } catch (err) {
      console.log("Error: Connect to api graphql server.");
    }
  };

  const { photo, title, author, isbn, description, year } = book;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">
            Adicionar Libro
          </h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Carátula
                </label>
                <input
                  type="file"
                  onChange={handleOnChange}
                  name="photo"
                  value={photo}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  multiple
                />
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Título
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="title"
                  value={title}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Autor/es
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="author"
                  value={author}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  ISBN
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="isbn"
                  value={isbn}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Descripción
                </label>
                <textarea
                  onChange={handleOnChange}
                  name="description"
                  value={description}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  placeholder="Breve descripción del libro..."
                ></textarea>
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Año de publicación
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="year"
                  value={year}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  pattern="[0-9]{1,4}"
                />
              </StyledLabel>
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Añadir</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="inline-block ml-1">
                    <Link href="/">Ir al Inicio</Link>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledForm>
  );
};

export default AddBook;
