export const API_ROOT = `https://my-guitarstore-api.herokuapp.com/products/`;

//ACTION TYPES FOR PRODUCT CONTEXT
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_HAS_NEXT_PAGE = 'UPDATE_HAS_NEXT_PAGE';
export const SET_PAGE = 'SET_PAGE';
export const SET_DISPLAY_ITEMS = 'SET_DISPLAY_ITEMS';
export const SET_SORT_OPTION = 'SET_SORT_OPTION';
export const SET_FILTER_OPTION = 'SET_FILTER_OPTION';

//ACTION TYPES FOR CART CONTEXT
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const GET_TOTAL = 'GET_TOTAL';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';
export const OPEN_MESSAGE = 'OPEN_MESSAGE';
export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
