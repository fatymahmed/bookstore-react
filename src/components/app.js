/* eslint-disable react/forbid-prop-types */
import React from 'react';
import BooksList from './bookslist';
import BooksForm from './book-form';
import Header from './header';
import '../style.css';

const App = () => (
  <div className="app">
    <Header />
    <BooksList />
    <hr />
    <BooksForm />
  </div>
);

export default App;
