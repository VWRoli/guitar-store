import React, { useReducer, useContext, useEffect } from 'react';
import cartReducer from './cartReducer';
import {
  CLEAR_CART,
  REMOVE_ITEM,
  GET_TOTAL,
  TOGGLE_AMOUNT,
  ADD_ITEM,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
} from '../../constant';

const CartContext = React.createContext();

const initialState = {
  cart: [],
  compare: [],
  total: 0,
  amount: 0,
  compareAmount: 0,
  isMessageOpen: false,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
  };

  const addItem = (product, destination) => {
    dispatch({ type: ADD_ITEM, payload: { product, destination } });
  };

  useEffect(() => {
    dispatch({ type: GET_TOTAL });
  }, [state.cart]);

  //Open and close message
  const openMessage = () => {
    dispatch({ type: OPEN_MESSAGE });
  };

  const closeMessage = () => {
    dispatch({ type: CLOSE_MESSAGE });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        addItem,
        toggleAmount,
        openMessage,
        closeMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
