import React from 'react';
import BooksList from './bookslist';
import BooksForm from './book-form';

export default class App extends React.Component{
  render(){
    const { store } = this.props;
    return (
      <div>
        <BooksList store={store} />
        <BooksForm store={store} />
      </div>
    );
  }
}