import axios from "axios";
import {
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAIL,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_FAIL,
  FILTER_AUTHORS_SUCCESS,
  FILTER_AUTHORS_FAIL,
} from "../types";

export const get_authors = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = {
      status: 200,
      data: {
        authors: [
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
      },
    };

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHORS_SUCCESS,
        payload: res.data,
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
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/AUTHORS/AUTHORS/${AUTHORSId}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHORS_SUCCESS,
        payload: res.data,
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
