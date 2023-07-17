import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { updateCurrentCategory } = categorySlice.actions;

export const getCurrentCategory = (state) => state.category.currentCategory;

export default categorySlice.reducer;
