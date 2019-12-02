/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  const { id, title, category } = book;
  const { onClick } = props;
  const removeBook = () => {
    onClick(book);
  };
  return (
    <div id={`book${id}`}>
      <p>{title}</p>
      <p>{category}</p>
      <button type="button" onClick={removeBook}>Remove book</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
