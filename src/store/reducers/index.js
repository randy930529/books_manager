import { combineReducers } from "redux";
import Books from "./books";
import Authors from "./authors";

export default combineReducers({
  booksData: Books,
  authorsData: Authors,
});
