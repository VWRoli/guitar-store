import {
  SET_PRODUCTS,
  SET_ERROR,
  SET_LOADING,
  UPDATE_HAS_NEXT_PAGE,
  SET_PAGE,
  SET_DISPLAY_ITEMS,
} from '../../constant';

const productReducer = (state, action) => {
  if (action.type === SET_PRODUCTS) {
    return { ...state, products: action.payload, isLoading: false };
  }

  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_HAS_NEXT_PAGE) {
    return { ...state, hasNextPage: action.payload };
  }
  if (action.type === SET_PAGE) {
    return { ...state, page: action.payload };
  }
  if (action.type === SET_DISPLAY_ITEMS) {
    return { ...state, displayItems: action.payload };
  }

  if (action.type === SET_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      errorMsg: action.payload,
    };
  }

  return state;
};
export default productReducer;
