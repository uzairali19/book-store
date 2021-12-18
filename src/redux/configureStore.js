import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { booksReducer } from './books/booksReducer';

const reducer = combineReducers({
  booksReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

export default store;
