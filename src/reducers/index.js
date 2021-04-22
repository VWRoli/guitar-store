import { combineReducers } from 'redux';
import cartReducer from './cartReducers';
import compareReducer from './compareReducers';
import productReducer from './productReducers';
import modalReducer from './modalReducers';

export default combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  products: productReducer,
  compare: compareReducer,
});
