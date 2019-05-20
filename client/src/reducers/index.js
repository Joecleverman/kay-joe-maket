import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  products: productsReducer,
  comments: commentsReducer
})
