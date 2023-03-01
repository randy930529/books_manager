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

export const get_books = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = {
      status: 200,
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    };

    if (res.status === 200) {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: res.data,
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
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/BOOKS/BOOKS/${BOOKSId}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: res.data,
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
