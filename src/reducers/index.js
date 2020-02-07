import { combineReducers } from 'redux';
import books from './book';
import filter from './filter';
import apis from './api-call';

const rootReducer = combineReducers({ filter, books, apis });

export default rootReducer;
