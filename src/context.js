import React, { useReducer, useContext, useEffect, useCallback } from 'react';
import reducer from './reducer';

import { API_ROOT, LOADING, SET_AMPS, SET_GUITARS, ERROR } from './constant';

const StoreContext = React.createContext();

const initialState = {
  isLoading: false,
  isError: false,
  guitars: [],
  amps: [],
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchGuitars = useCallback(async () => {
    try {
      //Set loading
      dispatch({ type: LOADING });

      //Urls for fetching data
      const urls = [`${API_ROOT}guitars`, `${API_ROOT}amps`];

      //Fetching data from two urls
      const responses = await Promise.all(
        urls.map((url) => fetch(url).catch((error) => error))
      );

      const data = await Promise.all(
        responses.map((response) =>
          response.json ? response.json().catch((error) => error) : response
        )
      );

      console.log({} === data[0]);
      //Set gutiars
      dispatch({ type: SET_GUITARS, payload: data[0] });

      //Set amps
      dispatch({ type: SET_AMPS, payload: data[1] });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR });
    }
  }, []);

  useEffect(() => {
    fetchGuitars();
  }, [fetchGuitars]);

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
