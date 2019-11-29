/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BooksList from './bookslist';
import BooksForm from './book-form';

const App = (props) => {
  const { store } = props;
  return (
    <div>
      <BooksList store={store} />
      <BooksForm store={store} />
    </div>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
