/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './book';
import { removeBook } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book.id);
  }

  render() {
    const { books } = this.props;
    return (books.map(book => (
      <Book key={book.id} book={book} onClick={this.handleRemoveBook} />
    )));
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

BooksList.propTypes = {
  books: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
