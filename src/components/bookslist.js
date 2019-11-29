import React from 'react';
import Book from './book';

const BooksList = (props) => {
  const { store } = props;
  const books = store.getState();
  return (books.map(book => (
    <Book key={book.id} book={book} />
  )));
};

export default BooksList;
