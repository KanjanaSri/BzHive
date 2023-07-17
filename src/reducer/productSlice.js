import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAsyncProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = "There was a problem fetching products!";
      }),
});

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return data;
  }
);

export const getAllProducts = (state) => state.products.products;
export const getStatus = (state) => state.products.status;
export const getError = (state) => state.products.error;

export default productSlice.reducer;
