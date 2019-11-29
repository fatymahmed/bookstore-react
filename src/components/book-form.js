import React from 'react';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
export default class BooksForm extends React.Component{
  render(){
    return (
      <form>
        <input type='text' />
        <select>
          {categories.map(category => (
            <option>
              {category}
            </option>
          ))}
        </select>
        <button>
          Submit
        </button>
      </form>
    );
  }
}