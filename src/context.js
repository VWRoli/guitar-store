import React, { useReducer, useContext } from 'react';
import reducer from './reducer';

import { API_ROOT, SET_DATA } from './constant';

const StoreContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: false,
  guitars: [],
  amps: [],
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(StoreContext);
};
