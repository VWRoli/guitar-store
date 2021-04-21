import {
  SET_PRODUCTS,
  SET_ERROR,
  SET_LOADING,
  UPDATE_HAS_NEXT_PAGE,
  SET_PAGE,
  SET_DISPLAY_ITEMS,
  SET_SORT_OPTION,
  SET_FILTER_OPTION,
  SET_QUERY,
} from '../constants/actionTypes';

const defaultState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  products: [],
  page: 1,
  displayItems: 9,
  hasNextpage: false,
  sorting: '?',
  filter: [],
  searchQuery: '',
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload, isLoading: false };
    case SET_LOADING:
      return { ...state, isLoading: true };
    case UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_DISPLAY_ITEMS:
      return { ...state, displayItems: action.payload };
    case SET_SORT_OPTION:
      return { ...state, sorting: action.payload };
    case SET_FILTER_OPTION:
      return { ...state, filter: action.payload };
    case SET_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
