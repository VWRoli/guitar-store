import { SET_DATA } from './constant';

const reducer = (state, action) => {
  if (action.type === SET_DATA) {
    return { ...state, guitars: action.payload };
  }
  return { ...state };
};

export default reducer;
