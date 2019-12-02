import React from 'react';
import { addBook } from '../actions/index';
import generateUniqueId from '../index';
import { connect } from 'react-redux';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  createBook = () => {
    return {
      title: this.state.title,
      category: this.state.category,
      id: generateUniqueId() 
    }
  }

  resetStates = () => {
    this.setState({
      title: '',
      category: categories[0]
    })
  }

  handleSubmit = (event) => {
    this.props.addNewBook(this.createBook());
    this.resetStates();
  }

  render() {
    const { title, category } = this.state; 
    return (
      <form>
        <input type="text" name='title' value={title} onChange={this.handleChange} />
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

const mapDispatchToProps = dispatch => {
  return {
    addNewBook: book => {dispatch(addBook(book))},
  }
}
export default connect(null,mapDispatchToProps)(BooksForm);
