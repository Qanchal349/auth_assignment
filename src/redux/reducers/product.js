/** @format */

import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  { allProducts: [], product: {} },
  {
    // get all products
    getProductRequest: (state) => {
      state.loding = true;
    },

    getProductSuccess: (state, action) => {
      state.loading = false;
      state.allProducts = action.payload.data;
      state.message = action.payload.message
    },

    getProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get product detail
    getProductDetailRequest: (state) => {
      state.loding = true;
    },

    getProductDetailSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },

    getProductDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.loading = false;
      state.error = null;
    },
    clearMessage: (state) => {
      state.loading = false;
      state.message = null;
    },
  }
);
