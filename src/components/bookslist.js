import React from 'react';
import Book from './book';

const BooksList = (props) => {
  const { store } = props;
  const books = store.getState();
  return (books.map((book) => (
    <Book book={book} />
  )));
};

export default BooksList;
