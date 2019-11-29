import React from 'react';

export default class Book extends React.Component{
  render(){
    const book = this.props.book;
    return (
      <div id={`book${book.id}`}> 
          <p>{book.title}</p>
          <p>{book.category}</p>
      </div>
    );
  }
}