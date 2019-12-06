import React from 'react';

const containerStyle = {
  backgroundColor: '#ffffff',
};
const style = {
  height: 95,
  width: 500,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: 100,
};
const bookstoreStyle = { color: '#0290ff', fontSize: 30, fontWeight: 'bold' };
const booksStyle = {
  fontSize: 13, fontWeight: 'normal', color: '#121212', marginTop: 5, letterSpacing: 1.9,
};
const categoriesSTyle = { ...booksStyle, opacity: 0.5 };

const Header = () => (
  <div style={containerStyle}>
    <div style={style}>
      <h2 style={bookstoreStyle}>
Bookstore CMS
      </h2>
      <h4 style={booksStyle}>BOOKS</h4>
      <h4 style={categoriesSTyle}>CATEGORIES</h4>
    </div>

  </div>

);

export default Header;
