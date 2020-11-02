import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import menuReducer from './store/reducers/menuReducer'
import orderReducer from './store/reducers/orderReducer'
import cartReducer from './store/reducers/cartReducer'
import * as serviceWorker from './serviceWorker';

const mainReducer = combineReducers({
  order: orderReducer,
  menu : menuReducer,
  cart: cartReducer
})

const store = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
