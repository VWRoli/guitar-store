import React, { useReducer, useContext } from 'react';
import cartReducer from './cartReducer';
import { CLEAR_CART, REMOVE_ITEM } from '../../constant';

const CartContext = React.createContext();

const initialState = {
  cart: [
    {
      id: 1,
      name: 'Ibanez AZ2402',
      price: 1799.99,
      image:
        'https://muzikercdn.com/uploads/products/6256/625697/main_b504a8bc.jpg',
      amount: 1,
    },
    {
      id: 2,
      name: 'Ibanez AZ2402',
      price: 1799.99,
      image:
        'https://muzikercdn.com/uploads/products/6256/625697/main_b504a8bc.jpg',
      amount: 1,
    },
    {
      id: 3,
      name: 'Ibanez AZ2402',
      price: 1799.99,
      image:
        'https://muzikercdn.com/uploads/products/6256/625697/main_b504a8bc.jpg',
      amount: 1,
    },
  ],
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
