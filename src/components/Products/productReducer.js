import { SET_PRODUCTS, SET_ERROR, SET_LOADING } from '../../constant';

const productReducer = (state, action) => {
  if (action.type === SET_PRODUCTS) {
    return { ...state, products: action.payload, isLoading: false };
  }

  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true };
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
