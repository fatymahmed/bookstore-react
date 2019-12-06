/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import generateUniqueId from '../idGenerator';
import {
  categories, bookFormTitle, inputPlaceHolder, apiURL,
} from '../constants';
import { post } from '../services/api-service';
import {
  fetchOnGoing,
  fetchSuccess,
  fetchFailure,
  storeBooks,
} from '../actions/index';
import '../style.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSuccessPost = this.onSuccessPost.bind(this);
  }

  onSuccessPost(data) {
    const { fetchSuccess, storeBooks } = this.props;
    fetchSuccess();
    storeBooks(data);
  }

  onFailurePost() {

  }

  handleSubmit() {
    const { fetchOnGoing } = this.props;
    fetchOnGoing();
    post(this.onSuccessPost, this.onSuccessPost, this.createBook(), apiURL);
    this.resetStates();
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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="container">
        <p className="formTitle">{bookFormTitle}</p>
        <input type="text" placeholder={inputPlaceHolder} name="title" className="titleInput" value={title} onChange={this.handleChange} />
        <select className="categoryInput" name="category" value={category} onChange={this.handleChange}>
          {categories.map(category => (
            <option key={category}>

              {category}
            </option>
          ))}
        </select>
        <button className="submitButton" type="button" onClick={this.handleSubmit}>
        ADD BOOK
        </button>
      </div>
    );
  }
}

BooksForm.propTypes = {
  fetchOnGoing: PropTypes.func.isRequired,
  storeBooks: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchOnGoing: () => dispatch(fetchOnGoing()),
  fetchFailure: () => dispatch(fetchFailure()),
  fetchSuccess: () => dispatch(fetchSuccess()),
  storeBooks: books => dispatch(storeBooks(books)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
