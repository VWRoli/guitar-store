import {
  SET_DISPLAY_ITEMS,
  SET_ERROR,
  SET_FILTER_OPTION,
  SET_LOADING,
  SET_PAGE,
  SET_PRODUCTS,
  SET_QUERY,
  SET_SORT_OPTION,
  UPDATE_HAS_NEXT_PAGE,
} from '../constants/actionTypes';
import { API_ROOT } from '../constants/constant';

export const setPage = (page) => (dispatch) => {
  dispatch({ type: SET_PAGE, payload: page });
};

export const setDisplayItems = (itemNumber) => (dispatch) => {
  dispatch({ type: SET_DISPLAY_ITEMS, payload: itemNumber });
};

export const setSorting = (sortOption) => (dispatch) => {
  dispatch({ type: SET_SORT_OPTION, payload: sortOption });
};

export const setFilters = (filterOption) => (dispatch) => {
  dispatch({ type: SET_FILTER_OPTION, payload: filterOption });
};

export const setSearchQuery = (query) => (dispatch) => {
  dispatch({ type: SET_QUERY, payload: query });
};

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await fetch(
      `${API_ROOT}${getState().products.sorting}${
        getState().products.searchQuery
      }&_page=${getState().products.page}&_limit=${
        getState().products.displayItems
      }${getState().products.filter.join('')}`
    );

    if (!response.ok) throw new Error(`${response.status} Products not found`);

    const data = await response.json();

    //Checking for next page
    const nextPageResponse = await fetch(
      `${API_ROOT}${getState().products.sorting}${
        getState().products.searchQuery
      }&_page=${getState().products.page + 1}&_limit=${
        getState().products.displayItems
      }${getState().products.filter.join('')}`
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
};
