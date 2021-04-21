const defaultState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  products: [],
  page: 1,
  displayItems: 9,
  hasNextpage: false,
  sorting: '?',
  filter: [],
  searchQuery: '',
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default productReducer;
