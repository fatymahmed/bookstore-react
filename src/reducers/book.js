import { STORE_BOOKS, REMOVE_BOOK } from '../constants';

const books = (state = [], action) => {
  switch (action.type) {
    case STORE_BOOKS:
      return action.books;
    case REMOVE_BOOK:
      return (state.filter(x => x.id !== action.id));
    default:
      return state;
  }
};

export default books;
