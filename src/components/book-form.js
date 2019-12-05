/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addBook } from '../actions/index';
import generateUniqueId from '../idGenerator';
import { categories, bookFormTitle, inputPlaceHolder } from '../constants';
import { post } from '../services/api-service';
import {
  fetchOnGoing,
  fetchSuccess,
  fetchFailure,
  storeBooks,
} from '../actions/index';

const containerStyle = {
  paddingLeft: 100,
};
const formTitleStyle = {
  fontSize: 20,
  fontWeight: 'bold',
  letterSpacing: -0.18,
  color: '#888888',
  marginTop: 29,
  marginBottom: 29,
};
const titleInputStyle = {
  width: 554,
  height: 45,
  borderRadius: 4,
  border: '1px solid #e8e8e8',
  backgroundColor: '#ffffff',
  padding: 10,
  fontSize: 16,
  letterSpacing: -0.15,
  color: '#00000',
};
const categoryInputStyle = {
  width: 285,
  height: 45,
  borderRadius: 4,
  border: '1px solid #e8e8e8',
  backgroundColor: '#ffffff',
  padding: 10,
  fontSize: 16,
  letterSpacing: -0.15,
  color: '#00000',
  opacity: 0.6,
  marginLeft: 30,
};
const submitButtonStyle = {
  width: 184,
  height: 45,
  borderRadius: 3,
  backgroundColor: '#0290ff',
  border: 'none',
  color: 'white',
  marginLeft: 30,
  padding: 10,
};

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
    post(this.onSuccessPost, this.onSuccessPost, this.createBook());
    // const { addNewBook } = this.props;
    // addNewBook(this.createBook());
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
      <div style={containerStyle}>
        <p style={formTitleStyle}>{bookFormTitle}</p>
        <input type="text" placeholder={inputPlaceHolder} name="title" style={titleInputStyle} value={title} onChange={this.handleChange} />
        <select style={categoryInputStyle} name="category" value={category} onChange={this.handleChange}>
          {categories.map(category => (
            <option key={category}>

              {category}
            </option>
          ))}
        </select>
        <button style={submitButtonStyle} type="button" onClick={this.handleSubmit}>
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
