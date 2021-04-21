import { combineReducers } from 'redux';
import cartReducer from './cartReducers';
import productReducers from './productReducers';
import modalReducers from './modalReducers';

export default combineReducers({
  cart: cartReducer,
  modal: modalReducers,
  product: productReducers,
});
