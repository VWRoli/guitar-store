import React, { useReducer, useContext, useEffect, useCallback } from 'react';
import productReducer from './productReducer';
import { API_ROOT, SET_PRODUCTS, SET_ERROR, SET_LOADING } from '../../constant';

const ProductContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  products: [],
  page: 1,
};
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = useCallback(async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(`${API_ROOT}?_page=${state.page}&_limit=9`);

      if (!response.ok)
        throw new Error(`${response.status} Products not found`);

      const data = await response.json();

      dispatch({ type: SET_PRODUCTS, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  }, [state.page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductContext);
};
