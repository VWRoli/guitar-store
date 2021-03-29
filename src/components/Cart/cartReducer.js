import { CLEAR_CART } from '../../constant';

const cartReducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  return state;
};
export default cartReducer;
