/* eslint-disable react/forbid-prop-types */
import React from 'react';
import BooksList from './bookslist';
import BooksForm from './book-form';

const App = () => (
  <div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
