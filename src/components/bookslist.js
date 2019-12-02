import React from 'react';
import { connect } from 'react-redux';
import Book from './book';
import { removeBook } from '../actions/index';


class BooksList extends React.Component {
  handleRemoveBook = (book) => {
    this.props.removeBook(book.id);
  };
  render() {
    const { books } = this.props;
    return (books.map((book) => (
      <Book key={book.id} book={book} onClick={this.handleRemoveBook} />
    )));
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
