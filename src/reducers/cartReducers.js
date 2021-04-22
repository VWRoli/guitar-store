import {
  ADD_CART_ITEM,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_AMOUNT,
  GET_CART_TOTAL,
} from '../constants/actionTypes';

const defaultState = {
  cart: [],
  total: 0,
  amount: 0,
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE_CART_ITEM:
      return { ...state, cart: action.payload };

    case ADD_CART_ITEM:
      return { ...state, cart: action.payload };

    case TOGGLE_CART_AMOUNT:
      return { ...state, cart: action.payload };
    case GET_CART_TOTAL:
      const { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount, isOnSale } = cartItem;

          const onSalePrice = price * 0.9;

          const itemTotal = (isOnSale ? onSalePrice : price) * amount;

          //get cart total value
          cartTotal.total += itemTotal;

          //get cart total items
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return { ...state, total, amount };

    default:
      return state;
  }
};
export default cartReducer;
