import React, { useReducer, useContext } from 'react';
import cartReducer from './cartReducer';
import { CLEAR_CART } from '../../constant';

const CartContext = React.createContext();

const initialState = {
  cart: [
    {
      id: 1500000286807,
      name: 'Ibanez AZ2402',
      price: 1799.99,
      image:
        'https://muzikercdn.com/uploads/products/6256/625697/main_b504a8bc.jpg',
      amount: 1,
    },
    {
      id: 150000286807,
      name: 'Ibanez AZ2402',
      price: 1799.99,
      image:
        'https://muzikercdn.com/uploads/products/6256/625697/main_b504a8bc.jpg',
      amount: 1,
    },
    {
      id: 150000028607,
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

  return (
    <CartContext.Provider value={{ ...state, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
