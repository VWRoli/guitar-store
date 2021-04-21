import { CLOSE_MESSAGE, OPEN_MESSAGE } from '../constants/actionTypes';

export const openMessage = () => (dispatch) => {
  dispatch({ type: OPEN_MESSAGE });
};

export const closeMessage = () => (dispatch) => {
  dispatch({ type: CLOSE_MESSAGE });
};
