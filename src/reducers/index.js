import { combineReducers } from 'redux';
import cartReducer from './cartReducers';
import productReducers from './productReducers';

export default combineReducers({
  cart: cartReducer,
  product: productReducers,
});
