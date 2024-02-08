"use client"

import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../asyncThunk";

type ProductSlice={
  products: any[],
  loading: boolean,
  error: any
}

const initialState:ProductSlice = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
