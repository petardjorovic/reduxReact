// 1. CREATE SLICE

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    products: [],
    error: false,
    errorMsg: "",
    info: "",
    singleProduct: {},
  },
  reducers: {
    handleAllProductsAction: (state, action) => {
      let data = action.payload;
      state.isLoading = data.isLoading;
      state.products = data.data;
      state.error = data.error;
      state.errorMsg = data.errorMsg;
    },
    handleSingleProductAction: (state, action) => {
      let data = action.payload;
      state.singleProduct = data;
    },
  },
});

export const { handleAllProductsAction, handleSingleProductAction } =
  productSlice.actions;
export default productSlice.reducer;
