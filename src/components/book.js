/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  return (
    <div id={`book${id}`}>
      <p>{title}</p>
      <p>{category}</p>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
