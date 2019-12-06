/* eslint-disable react/forbid-prop-types */
import React from 'react';
import BooksList from './bookslist';
import BooksForm from './book-form';
import Header from './header';

const style = {
  width: 1200, margin: 'auto', paddingBottom: 100, backgroundColor: '#fafafa',
};
const lineStyle = {
  height: 2,
  border: '1px solid #e8e8e8',
  marginLeft: 100,
};
const App = () => (
  <div style={style}>
    <Header />
    <BooksList />
    <hr style={lineStyle} />
    <BooksForm />
  </div>
);

export default App;
