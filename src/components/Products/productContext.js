import React, { useReducer, useContext, useEffect, useCallback } from 'react';
import productReducer from './productReducer';
import {
  API_ROOT,
  SET_PRODUCTS,
  SET_ERROR,
  SET_LOADING,
  UPDATE_HAS_NEXT_PAGE,
  SET_PAGE,
} from '../../constant';

const ProductContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  products: [],
  page: 1,
  hasNextpage: false,
};
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const setPage = (page) => {
    dispatch({ type: SET_PAGE, payload: page });
  };

  const fetchProducts = useCallback(async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(`${API_ROOT}?_page=${state.page}&_limit=9`);

      if (!response.ok)
        throw new Error(`${response.status} Products not found`);

      const data = await response.json();

      //Checking for next page
      const nextPageResponse = await fetch(
        `${API_ROOT}?_page=${state.page + 1}&_limit=9`
      );

      if (!nextPageResponse.ok)
        throw new Error(`${nextPageResponse.status} Products not found`);

      const nextPageData = await nextPageResponse.json();

      nextPageData.length !== 0
        ? dispatch({ type: UPDATE_HAS_NEXT_PAGE, payload: true })
        : dispatch({ type: UPDATE_HAS_NEXT_PAGE, payload: false });

      dispatch({ type: SET_PRODUCTS, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
    }
  }, [state.page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider value={{ ...state, setPage }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductContext);
};
