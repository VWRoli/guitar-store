import { createSlice } from '@reduxjs/toolkit';

export const compareSlice = createSlice({
  name: 'compare',
  initialState: {
    compare: [],
  },
  reducers: {
    clearCompareItems: (state) => {
      state.compare = [];
    },
    removeCompareItem: (state, action) => {
      state.compare = state.compare.filter(
        (item) => item.id !== action.payload
      );
    },
    addCompareItem: (state, action) => {
      if (state.compare.length < 5) {
        state.compare = [...state.compare, action.payload];
      }
    },
  },
});

export const {
  clearCompareItems,
  removeCompareItem,
  addCompareItem,
} = compareSlice.actions;

export const selectCompare = (state) => state.compare.compare;

export default compareSlice.reducer;
