import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        amount: 1,
        totalItemPrice: action.payload.price * 1,
      };
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (cartItem) {
        const newCart = [...state.cart].map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: cartItem.amount + 1,
              totalItemPrice: item.price * (item.amount + 1),
            };
          } else return item;
        });
        state.cart = newCart;
      } else {
        state.cart.push(newItem);
      }
    },

    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.amount++;
      item.totalItemPrice = item.price * item.amount;
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.amount--;
      item.totalItemPrice = item.price * item.amount;

      if (item.amount === 0)
        cartSlice.caseReducers.deleteFromCart(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalItemPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.amount, 0);
