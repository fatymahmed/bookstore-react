/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions/index';
import generateUniqueId from '../idGenerator';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  createBook() {
    const { title, category } = this.state;
    return {
      title,
      category,
      id: generateUniqueId(),
    };
  }

  resetStates() {
    this.setState({
      title: '',
      category: categories[0],
    });
  }

  handleSubmit() {
    const { addNewBook } = this.props;
    addNewBook(this.createBook());
    this.resetStates();
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <input type="text" name="title" value={title} onChange={this.handleChange} />
        <select name="category" value={category} onChange={this.handleChange}>
          {categories.map(category => (
            <option key={category}>

              {category}
            </option>
          ))}
        </select>
        <button type="button" onClick={this.handleSubmit}>
        Submit
        </button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addNewBook: (book) => { dispatch(addBook(book)); },
});
export default connect(null, mapDispatchToProps)(BooksForm);
