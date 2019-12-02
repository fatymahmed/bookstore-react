import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/app';
import rootReducer from './reducers/index';
import generateUniqueId from './idGenerator';

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
