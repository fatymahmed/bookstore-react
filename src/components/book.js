/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  const { onClick } = props;
  const removeBook = () => {
    onClick(book);
  };
  return (
    <div className="book" id={`book${id}`}>
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={removeBook}>Remove book</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
