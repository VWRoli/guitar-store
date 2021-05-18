import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
    amount: 0,
  },
  reducers: {
    clearCartItems: (state) => {
      state.cart = [];
    },
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    addCartItem: (state, action) => {
      console.log(state.cart);
      //Check for product in cart
      const inCart = state.cart.some((item) => action.payload.id === item.id);

      if (inCart) {
        //Delete existing item from cart
        const newCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        //create new item
        const [newItem] = state.cart.filter(
          (item) => action.payload.id === item.id
        );
        //update new item amount
        const updatedItem = { ...newItem, amount: newItem.amount + 1 };
        //spread new cart and add new item
        state.cart = [...newCart, updatedItem];
      } else {
        //else just add to cart
        const newItem = { ...action.payload, amount: 1 };
        state.cart = [...state.cart, newItem];
      }
    },
    toggleCartAmount: (state, action) => {
      const newCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === 'increase') {
              return { ...item, amount: item.amount + 1 };
            } else {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      state.cart = newCart;
    },
    // getCartTotal: (state) => {
    //   console.log(state);
    //   const { total, amount } = state.cart.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, amount, isOnSale } = cartItem;

    //       const onSalePrice = price * 0.9;

    //       const itemTotal = (isOnSale ? onSalePrice : price) * amount;

    //       //get cart total value
    //       cartTotal.total += itemTotal;

    //       //get cart total items
    //       cartTotal.amount += amount;
    //       return cartTotal;
    //     },
    //     { total: 0, amount: 0 }
    //   );
    //   state.total = total;
    //   state.amount = amount;
    // },
  },
});

export const { addCartItem, removeCartItem, clearCartItems, toggleCartAmount } =
  cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export const selectAmount = (state) => state.cart.amount;

export default cartSlice.reducer;
