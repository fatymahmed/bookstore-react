import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import bookReducer from './reducers/book';
import App from './components/app';
import rootReducer from './reducers/index';

const ids = [];

const generateUniqueId = () => {
  let number = Math.floor(Math.random() * 100);
  while (ids.includes(number)) {
    number = Math.floor(Math.random() * 100);
  }
  ids.push(number);
  return number;
};

const initialsBooks = [{
  id: generateUniqueId(),
  title: 'Things fall apart',
  category: 'Learning',
},
{
  id: generateUniqueId(),
  title: 'God Father',
  category: 'History',
}];

const store = createStore(rootReducer, initialsBooks);

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
export {generateUniqueId};