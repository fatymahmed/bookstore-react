import { CREATE_BOOK, REMOVE_BOOK } from '../constants';

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return (state.filter(x => x.id !== action.id));
    default:
      return state;
  }
};

export default books;
