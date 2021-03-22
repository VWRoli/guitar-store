import { SET_AMPS, LOADING, SET_GUITARS } from './constant';

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

  return { ...state };
};

export default reducer;
