import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../constants';

const CategoryFilter = (props) => {
  const { onChange } = props;
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <select name="category" onChange={handleChange}>
      <option>All</option>
      {categories.map(category => (
        <option key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
