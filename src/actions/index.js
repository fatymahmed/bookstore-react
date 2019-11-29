const REMOVE_BOOK = 'REMOVE_BOOK';
const CREATE_BOOK = 'CREATE_BOOK';

const addBook = (book) => {
  return {
    type: CREATE_BOOK,
    book
  }
};

const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    id,
  }
};