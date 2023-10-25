import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetail: {
    data: {},
    loading: false,
    error: null,
  },
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    // getproductDetail
    getProductDetailRequest: (state, action) => {
      state.productDetail.loading = true;
      state.productDetail.error = null;
    },
    getProductDetailSuccess: (state, action) => {
      const { data } = action.payload;
      state.productDetail.data = data;
      state.productDetail.loading = false;
    },
    getProductDetailFailure: (state, action) => {
      const { error } = action.payload;
      state.productDetail.loading = false;
      state.productDetail.error = error;
    },
  },
});

export const {
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
