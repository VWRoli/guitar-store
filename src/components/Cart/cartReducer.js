import {
  CLEAR_CART,
  REMOVE_ITEM,
  GET_TOTAL,
  TOGGLE_AMOUNT,
  ADD_ITEM,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
} from '../../constant';

const cartReducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === ADD_ITEM) {
    //! ADDING TO CART
    if (action.payload.destination === 'cart') {
      //Check for product in cart
      const inCart = state.cart.some(
        (item) => action.payload.product.id === item.id
      );

      if (inCart) {
        //Delete existing item from cart
        const newCart = state.cart.filter(
          (item) => item.id !== action.payload.product.id
        );
        //create new item
        const [newItem] = state.cart.filter(
          (item) => action.payload.product.id === item.id
        );
        //update new item amount
        const updatedItem = { ...newItem, amount: newItem.amount + 1 };
        //spread new cart and add new item
        return { ...state, cart: [...newCart, updatedItem] };
      } else {
        //else just add to cart
        const newItem = { ...action.payload.product, amount: 1 };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    /////
    //! ADDING TO COMPARE
    if (action.payload.destination === 'compare') {
      return { ...state, compare: [...state.compare, action.payload.product] };
    }
  }

  if (action.type === TOGGLE_AMOUNT) {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'increase') {
            return { ...item, amount: item.amount + 1 };
          } else {
          }
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
  }

  if (action.type === OPEN_MESSAGE) {
    return { ...state, isMessageOpen: true };
  }
  if (action.type === CLOSE_MESSAGE) {
    return { ...state, isMessageOpen: false };
  }

  return state;
};
export default cartReducer;
