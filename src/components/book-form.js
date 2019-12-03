/* eslint-disable react/no-unused-state */
import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
  }

  render() {
    return (
      <form>
        <input type="text" />
        <select>
          {categories.map(category => (
            <option key={category.id}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">
        Submit
        </button>
      </form>
    );
  }
}
export default BooksForm;
