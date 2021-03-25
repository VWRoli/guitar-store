import { SET_PRODUCTS } from '../../constant';

const productReducer = (state, action) => {
  if (action.type === SET_PRODUCTS) {
    return { ...state, products: action.payload };
  }

  return state;
};
export default productReducer;
