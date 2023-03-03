import Link from "next/link";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledForm = styled.form``;

const StyledLabel = styled.label``;

const CREATE_AUTHOR = gql`
  mutation CreateAuthor(
    $name: String!
    $lastname: String!
    $about: String!
    $birthdate: Date!
    $photo: String
  ) {
    createAuthor(
      data: { message: "Create author successfully...!", name: $name }
    ) {
      id
    }
  }
`;

const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor(
    $name: String!
    $lastname: String!
    $about: String!
    $birthdate: Date!
    $photo: String
  ) {
    updateAuthor(
      id: $id
      data: {
        message: "Update author successfully...!"
        name: $name
        lastname: $lastname
      }
    ) {
      id
    }
  }
`;

const AddAuthor = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const [createAuthor] = useMutation(CREATE_AUTHOR);
  const [updateAuthor] = useMutation(UPDATE_AUTHOR);

  const [author, setAuthor] = useState({
    name: "",
    lastname: "",
    about: "",
    birthdate: "",
    photo: "",
  });

  const handleOnChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try {
      if (id) {
        updateAuthor({ variables: { ...author } });
        e.preventDefault();
      } else {
        createAuthor({ variables: { ...author } });
        e.preventDefault();
      }
    } catch (err) {
      console.log("Error: Connect to api graphql server.");
    }
  };

  const { name, lastname, about, birthdate, photo } = author;

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
                  Foto
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
                  Nombre
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="name"
                  value={name}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Apellidos
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="lastname"
                  value={lastname}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Reseña
                </label>
                <textarea
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  onChange={handleOnChange}
                  name="about"
                  value={about}
                  placeholder="Sobre el autor..."
                ></textarea>
              </StyledLabel>
              <StyledLabel>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  onChange={handleOnChange}
                  name="birthdate"
                  value={birthdate}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
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

export default AddAuthor;
