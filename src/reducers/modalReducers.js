const defaultState = {
  isMessageOpen: false,
};
const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MESSAGE:
      return { ...state, isMessageOpen: true };
    case CLOSE_MESSAGE:
      return { ...state, isMessageOpen: false };

    default:
      return state;
  }
};
export default modalReducer;
