import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  productDiscountList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  productDetail: {
    data: {},
    loading: false,
    error: null,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getProductList
    getProductListRequest: (state, action) => {
      state.productList.loading = true;
      state.productList.error = null;
    },
    getProductListSuccess: (state, action) => {
      const { data, meta, more } = action.payload;
      state.productList.data = more
        ? [...state.productList.data, ...data]
        : data;
      state.productList.meta = meta;
      state.productList.loading = false;
    },
    getProductListFailure: (state, action) => {
      const { error } = action.payload;
      state.productList.loading = false;
      state.productList.error = error;
    },
    // getDiscountProductList
    getDiscountProductListRequest: (state, action) => {
      state.productDiscountList.loading = true;
      state.productDiscountList.error = null;
    },
    getDiscountProductListSuccess: (state, action) => {
      const { data, meta } = action.payload;
      state.productDiscountList.data = data;
      state.productDiscountList.meta = meta;
      state.productDiscountList.loading = false;
    },
    getDiscountProductListFailure: (state, action) => {
      const { error } = action.payload;
      state.productDiscountList.loading = false;
      state.productDiscountList.error = error;
    },
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
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
  getDiscountProductListRequest,
  getDiscountProductListSuccess,
  getDiscountProductListFailure,
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
} = productSlice.actions;

export default productSlice.reducer;
