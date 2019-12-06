import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../constants';

const style = {
  display: 'flex',
  justifyContent: 'flex-end',
};
const selectInputStyle = {
  width: 100,
  height: 45,
  borderRadius: 4,
  border: '1px solid #e8e8e8',
  backgroundColor: '#ffffff',
  padding: 10,
  fontSize: 16,
  letterSpacing: -0.15,
  color: '#00000',
  opacity: 0.6,
};
const spanStyle = {
  paddingTop: 15,
};
const CategoryFilter = (props) => {
  const { onChange } = props;
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <div style={style}>
      <span style={spanStyle}>Filter : &nbsp;&nbsp; </span>
      <select style={selectInputStyle} name="category" onChange={handleChange}>
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
};

export default CategoryFilter;
