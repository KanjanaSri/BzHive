import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";
import sidebarReducer from "./reducer/sidebarSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
