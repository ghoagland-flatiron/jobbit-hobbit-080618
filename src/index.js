import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import hobbitReducer from './reducers/hobbitReducer'

const store = createStore(hobbitReducer)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider> , document.getElementById('root'));
