/* eslint-disable react/forbid-prop-types */
import React from 'react';
import BooksList from './bookslist';
import BooksForm from './book-form';
import Header from './header';

const style = { width: 1000, margin: 'auto' };
const App = () => (
  <div style={style}>
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
