import axios from "axios";
import {
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAIL,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_FAIL,
  FILTER_BOOKS_SUCCESS,
  FILTER_BOOKS_FAIL,
} from "../types";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      isbn
      description
      year
      photo
    }
  }
`;

export const get_books = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const { loading, error, data } = await useQuery(GET_BOOKS);

    if (error) {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_BOOKS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BOOKS_FAIL,
    });
  }
};

export const get_book = (bookId) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const { loading, error, data } = await useQuery(GET_BOOKS);

    if (error) {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_BOOKS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BOOKS_FAIL,
    });
  }
};
