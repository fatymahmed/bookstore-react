import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from '../constants';

const addBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  addBook,
  removeBook,
  changeFilter,
};
