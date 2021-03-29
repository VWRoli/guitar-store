import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  GET_TOTAL,
} from '../../constant';

const cartReducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE_AMOUNT) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE_AMOUNT) {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newCart };
  }

  if (action.type === GET_TOTAL) {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        //get cart total value
        cartTotal.total += itemTotal;

        //get cart total items
        cartTotal.amount += amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    return { ...state, total, amount };
  }

  return state;
};
export default cartReducer;
