import React from 'react';
import {addBook} from '../actions/index';
import {generateUniqueId} from '../index';
import { connect } from 'net';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
class BooksForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: categories[0]
    }
  }
  handleChange = (event) => {
    const target=event.target.name;
    const val = event.target.value;
    this.setState({[target]: val})
  }

  createBook = () =>{
    return({
      title: this.state.title,
      category: this.state.category,
      id: generateUniqueId()
    });
      }

  handleSubmit = (event)=>{
    event.preventDefault();
    const book = this.createBook();
    addBook(book);
  }

  render(){
    return(  <form>
      <input type="text" name='title' onChange={this.handleChange} />
      <select name= 'category' onChange={this.handleChange} >
        {categories.map(category => (
          <option key={category.id}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit" onSubmit={this.handleSubmit} >
          Submit
      </button>
    </form>)
  }
}

const mapStateToProps = (state) => {
  return{
    book: state.book
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    addBook: (book) => {
    dispatch(addBook())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksForm);
