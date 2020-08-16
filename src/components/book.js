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
      <div className="book-name">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <button className="button" type="button">
          Comment
        </button>
        <span className="opacity-val"> | </span>
        <button className="button" type="button" onClick={removeBook}>
          Remove
        </button>
        <span className="opacity-val"> | </span>
        <button className="button" type="button">
          Edit
        </button>
      </div>
      <div className="flex-display">
        <div className="progress-bar flex-display">
          <div className="completition-bar"/>
          <div className="completed-progress">
            <p className="percentage ">75%</p>
            <p className="completed opacity-val">Completed</p>
          </div>
        </div>
        <div>
          <div className="vertical-line opacity-val"/>
          <div>
            <p className="progress-title opacity-val margin-botton">
              CURRENT CHAPTER
            </p>
            <p className=".current-lesson margin-botton">Chapter: 43</p>
            <button className="update-progress-button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Book
