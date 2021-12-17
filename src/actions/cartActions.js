import {
  ADD_CART_ITEM,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_AMOUNT,
  GET_CART_TOTAL,
} from '../constants/actionTypes';

export const clearCartItems = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
  dispatch({ type: GET_CART_TOTAL });
};

export const removeCartItem = (id) => (dispatch, getState) => {
  const newCart = getState().cart.cart.filter((item) => item.id !== id);
  dispatch({ type: REMOVE_CART_ITEM, payload: newCart });
  dispatch({ type: GET_CART_TOTAL });
};

export const toggleCartAmount = (id, type) => (dispatch, getState) => {
  const newCart = getState()
    .cart.cart.map((item) => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, amount: item.amount + 1 };
        } else {
          return { ...item, amount: item.amount - 1 };
        }
      }
      return item;
    })
    .filter((item) => item.amount !== 0);
  dispatch({ type: TOGGLE_CART_AMOUNT, payload: newCart });
  dispatch({ type: GET_CART_TOTAL });
};

export const addCartItem = (product) => (dispatch, getState) => {
  //Check for product in cart
  const inCart = getState().cart.cart.some((item) => product.id === item.id);

  if (inCart) {
    //Delete existing item from cart
    const newCart = getState().cart.cart.filter(
      (item) => item.id !== product.id,
    );
    //create new item
    const [newItem] = getState().cart.cart.filter(
      (item) => product.id === item.id,
    );
    //update new item amount
    const updatedItem = { ...newItem, amount: newItem.amount + 1 };
    //spread new cart and add new item
    dispatch({ type: ADD_CART_ITEM, payload: [...newCart, updatedItem] });
  } else {
    //else just add to cart
    const newItem = { ...product, amount: 1 };
    dispatch({
      type: ADD_CART_ITEM,
      payload: [...getState().cart.cart, newItem],
    });
  }
  dispatch({ type: GET_CART_TOTAL });
};
