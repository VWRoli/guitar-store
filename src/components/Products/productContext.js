import { useReducer, useContext } from 'react';
import productReducer from './productReducer';

const ProductContext = React.createContext();

const initialState = {
  products: [],
};
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductContext);
};
