import {
  STORE_BOOKS,
  REMOVE_BOOK,
  CHANGE_FILTER,
  PROCESSING,
  FETCH_ERROR,
  FETCH_SUCCESS,
} from '../constants';

const storeBooks = books => ({
  type: STORE_BOOKS,
  books,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

const fetchOnGoing = () => ({
  type: PROCESSING,
});

const fetchSuccess = () => ({
  type: FETCH_SUCCESS,
});

const fetchFailure = () => ({
  type: FETCH_ERROR,
});

export {
  storeBooks,
  removeBook,
  changeFilter,
  fetchFailure,
  fetchOnGoing,
  fetchSuccess,
};
