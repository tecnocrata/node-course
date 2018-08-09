import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

import postReducer from './reducers/postReducer';

const store = createStore(postReducer);
ReactDOM.render(<App />, document.getElementById('root'));