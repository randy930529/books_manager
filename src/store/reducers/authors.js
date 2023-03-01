import {
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAIL,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_FAIL,
  FILTER_AUTHORS_SUCCESS,
  FILTER_AUTHORS_FAIL,
} from "../types";

const initialState = {
  authors: null,
  author: null,
  search_authors: null,
  filtered_authors: null,
};

export default function Authors(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AUTHORS_SUCCESS:
      return {
        ...state,
        authors: payload.authors,
      };
    case GET_AUTHORS_FAIL:
      return {
        ...state,
        authors: null,
      };
    case GET_AUTHOR_SUCCESS:
      return {
        ...state,
        author: payload.author,
      };
    case GET_AUTHOR_FAIL:
      return {
        ...state,
        author: null,
      };
    case FILTER_AUTHORS_SUCCESS:
      return {
        ...state,
        filtered_authors: payload.filtered_authors,
      };
    case FILTER_AUTHORS_FAIL:
      return {
        ...state,
        filtered_authors: null,
      };
    default:
      return state;
  }
}
