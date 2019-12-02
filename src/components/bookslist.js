import React from 'react';
import { connect } from 'react-redux';
import Book from './book';

const BooksList = (props) => {
  const { books } = props;
  return (books.map(book => (
    <Book key={book.id} book={book} />
  )));
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
