import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../constants';

const CategoryFilter = (props) => {
  const { onChange, filter } = props;
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div className="categoryFilterContainer">
      <span>Filter : &nbsp;&nbsp; </span>
      <select className="categoryInput categoryFilter" value={filter} name="category" onChange={handleChange}>
        <option>All</option>
        {categories.map(category => (
          <option key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default CategoryFilter;
