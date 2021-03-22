import { SET_AMPS, LOADING, SET_GUITARS, ERROR } from './constant';

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }

  if (action.type === SET_GUITARS) {
    return { ...state, guitars: action.payload };
  }

  if (action.type === SET_AMPS) {
    return { ...state, amps: action.payload, isLoading: false };
  }

  if (action.type === ERROR) {
    return { ...state, isError: true };
  }

  return { ...state };
};

export default reducer;
