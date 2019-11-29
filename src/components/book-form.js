import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => (
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

export default BooksForm;
