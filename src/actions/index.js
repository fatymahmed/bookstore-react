const REMOVE_BOOK = 'REMOVE_BOOK';
const CREATE_BOOK = 'CREATE_BOOK';

const addBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export {
  addBook,
  removeBook,
};
