import {
  CLEAR_COMPARE,
  REMOVE_COMPARE_ITEM,
  ADD_COMPARE_ITEM,
} from '../constants/actionTypes';

const defaultState = {
  compare: [],
};

const compareReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_COMPARE:
      return { ...state, compare: [] };

    case REMOVE_COMPARE_ITEM:
      return { ...state, compare: action.payload };

    case ADD_COMPARE_ITEM:
      return {
        ...state,
        compare: [...state.compare, action.payload],
      };

    default:
      return state;
  }
};

export default compareReducer;
