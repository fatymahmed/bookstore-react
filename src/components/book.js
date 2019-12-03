/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const style = {
  backgroundColor: '#ffffff', padding: 20, border: '1px solid lightgray', borderRadius: 4, marginBottom: 20,
};
const categoryStyle = {
  color: '#121212', fontSize: 14, fontWeight: 'bold', opacity: 0.5,
};
const titleStyle = {
  color: '#121212', fontSize: 22, fontWeight: 'bold', letterSpacing: -0.2, textTransform: 'capitalize', paddingTop: 10, paddingBottom: 10,
};
const buttonStyle = {
  color: '#4386bf', border: 'none', backgroundColor: '#ffffff', fontSize: 14, fontWeight: 300,
};

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  const { onClick } = props;
  const removeBook = () => {
    onClick(book);
  };
  return (
    <div style={style} id={`book${id}`}>
      <p style={categoryStyle}>{category}</p>
      <p style={titleStyle}>{title}</p>
      <button style={buttonStyle} type="button" onClick={removeBook}>Remove book</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
