import { CLEAR_CART, REMOVE_ITEM } from '../../constant';

const cartReducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  return state;
};
export default cartReducer;
