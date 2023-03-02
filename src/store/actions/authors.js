import {
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAIL,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_FAIL,
  FILTER_AUTHORS_SUCCESS,
  FILTER_AUTHORS_FAIL,
} from "../types";
import { useQuery, gql } from "@apollo/client";

const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
      lastname
      about
      birthdate
      photo
    }
  }
`;

export const get_authors = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const { loading, error, data } = await useQuery(GET_AUTHORS);

    if (error === 200) {
      dispatch({
        type: GET_AUTHORS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_AUTHORS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHORS_FAIL,
    });
  }
};

export const get_author = (authorId) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const { loading, error, data } = await useQuery(GET_AUTHORS);

    if (error === 200) {
      dispatch({
        type: GET_AUTHORS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_AUTHORS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHORS_FAIL,
    });
  }
};
