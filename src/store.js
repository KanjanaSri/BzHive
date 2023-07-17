import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";
import sidebarReducer from "./reducer/sidebarSlice";
import categoryReducer from "./reducer/categorySlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    sidebar: sidebarReducer,
    category: categoryReducer,
  },
});

export default store;
