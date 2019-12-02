import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
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

const store = createStore(rootReducer, { books: initialsBooks });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

export default generateUniqueId;
