import React from 'react';
import Book from './book';

export default class BooksList extends React.Component{
  render(){
    const { store } = this.props;
    const books = store.getState();
    return (books.map((book, key) => (
      <Book book={book} />
    )));
  }
}
