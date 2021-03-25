import React, { useReducer, useContext, useEffect } from 'react';
import productReducer from './productReducer';
import { useFetch } from '../../useFetch';
import { API_ROOT, SET_PRODUCTS } from '../../constant';

const ProductContext = React.createContext();

const initialState = {
  products: [],
};
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const { data: products } = useFetch(API_ROOT);

  useEffect(() => {
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [products]);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductContext);
};
