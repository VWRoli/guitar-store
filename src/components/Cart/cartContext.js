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
  isMessageOpen: false,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //Get LocalStorage
  useEffect(() => {
    //get cart data
    const cartData = localStorage.getItem('cartData');
    const savedCartData = JSON.parse(cartData);
    savedCartData ? (state.cart = savedCartData) : (state.cart = []);
    //get cart data
    const compareData = localStorage.getItem('compareData');
    const savedCompareData = JSON.parse(compareData);
    savedCompareData
      ? (state.compare = savedCompareData)
      : (state.compare = []);
  }, []);

  const clearItems = (source) => {
    dispatch({ type: CLEAR_CART, payload: source });
  };

  const removeItem = (id, source) => {
    dispatch({ type: REMOVE_ITEM, payload: { id, source } });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
  };

  const addItem = (product, source) => {
    dispatch({ type: ADD_ITEM, payload: { product, source } });
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

  //Set LocalStorage
  useEffect(() => {
    //set cart data
    const cartData = JSON.stringify(state.cart);
    localStorage.setItem('cartData', cartData);
    //set compare data
    const compareData = JSON.stringify(state.compare);
    localStorage.setItem('compareData', compareData);
  }, [state.cart, state.compare]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearItems,
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
