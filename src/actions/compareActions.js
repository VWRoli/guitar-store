import {
  ADD_COMPARE_ITEM,
  CLEAR_COMPARE,
  REMOVE_COMPARE_ITEM,
} from '../constants/actionTypes';

export const clearCompareItems = () => (dispatch) => {
  dispatch({ type: CLEAR_COMPARE });
};

export const removeCompareItem = (id) => (dispatch, getState) => {
  const newCompareItems = getState().compare.compare.filter(
    (item) => item.id !== id,
  );
  dispatch({ type: REMOVE_COMPARE_ITEM, payload: newCompareItems });
};

export const addCompareItem = (product) => (dispatch, getState) => {
  if (getState().compare.compare.length < 5) {
    dispatch({ type: ADD_COMPARE_ITEM, payload: product });
  }
};
