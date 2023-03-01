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

const initialState = {
  books: null,
  book: null,
  search_books: null,
  filtered_books: null,
};

export default function Books(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload.books,
      };
    case GET_BOOKS_FAIL:
      return {
        ...state,
        books: null,
      };
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        book: payload.book,
      };
    case GET_BOOK_FAIL:
      return {
        ...state,
        book: null,
      };
    case FILTER_BOOKS_SUCCESS:
      return {
        ...state,
        filtered_books: payload.filtered_books,
      };
    case FILTER_BOOKS_FAIL:
      return {
        ...state,
        filtered_books: null,
      };
    case SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        search_books: payload.search_books,
      };
    case SEARCH_BOOKS_FAIL:
      return {
        ...state,
        search_books: null,
      };
    default:
      return state;
  }
}
