import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
// import { BrowserRouter, Link, Route } from 'react-router-dom';




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
