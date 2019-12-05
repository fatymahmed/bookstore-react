const REMOVE_BOOK = 'REMOVE_BOOK';
const STORE_BOOKS = 'STORE_BOOKS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const PROCESSING = 'PROCESSING';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';
const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const bookFormTitle = 'ADD NEW BOOK';
const inputPlaceHolder = 'Book Title';

//const apiURL = 'http://localhost:3000/books';

const apiURL = 'https://bookstore-backends.herokuapp.com/books';

export {
  REMOVE_BOOK,
  STORE_BOOKS,
  CHANGE_FILTER,
  PROCESSING,
  FETCH_ERROR,
  FETCH_SUCCESS,
  categories,
  bookFormTitle,
  inputPlaceHolder,
  apiURL,
};
