/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './book';
import CategoryFilter from './category-filter';
import {
  removeBook,
  changeFilter,
  fetchOnGoing,
  fetchSuccess,
  fetchFailure,
  storeBooks,
} from '../actions/index';
import { get } from '../services/api-service';

const style = { backgroundColor: '#fafafa', padding: 20, paddingLeft: 100 };
class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onFetchFailure = this.onFetchFailure.bind(this);
    this.onFetchSuccess = this.onFetchSuccess.bind(this);
  }

  componentDidMount() {
    const { fetchOnGoing } = this.props;
    fetchOnGoing();
    get(this.onFetchSuccess, this.onFetchFailure);
  }

  onFetchSuccess(data) {
    const { fetchSuccess, storeBooks } = this.props;
    fetchSuccess();
    storeBooks(data);
  }

  onFetchFailure(error) {
    const { fetchFailure } = this.props;
    fetchFailure();
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    removeBook(book.id);
  }

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { books, filter } = this.props;
    let filterBooks = books;
    if (filter !== 'All') {
      filterBooks = books.filter((book) => book.category === filter);
    }
    return (
      <div style={style}>
        { filterBooks.map((book) => (
          <Book key={book.id} book={book} onClick={this.handleRemoveBook} />
        ))}
        <CategoryFilter onChange={this.handleFilterChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
  apis: state.apis,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
  fetchOnGoing: () => dispatch(fetchOnGoing()),
  fetchFailure: () => dispatch(fetchFailure()),
  fetchSuccess: () => dispatch(fetchSuccess()),
  storeBooks: books => dispatch(storeBooks(books)),
});

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  fetchOnGoing: PropTypes.func.isRequired,
  storeBooks: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
BooksList.defaultProps = {
  filter: 'All',
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
