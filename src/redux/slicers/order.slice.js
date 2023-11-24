import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: {
    data: [],
    meta: {},
    loading: false,
    error: null,
  },
  orderProductData: {
    loading: false,
    error: null,
  },
  updateOrderData: {
    loading: false,
    error: null,
  },
  cancelOrderData: {
    loading: false,
    error: null,
  },
  completeOrderData: {
    loading: false,
    error: null,
  },
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // getOrderList
    getOrderListRequest: (state, action) => {
      state.orderList.loading = true;
      state.orderList.error = null;
    },
    getOrderListSuccess: (state, action) => {
      const { data } = action.payload;
      state.orderList.data = data;
      state.orderList.loading = false;
    },
    getOrderListFailure: (state, action) => {
      const { error } = action.payload;
      state.orderList.loading = false;
      state.orderList.error = error;
    },
    // orderProduct
    orderProductRequest: (state, action) => {
      state.orderProductData.loading = true;
      state.orderProductData.error = null;
    },
    orderProductSuccess: (state, action) => {
      state.orderProductData.loading = false;
      state.orderProductData.error = null;
    },
    orderProductFailure: (state, action) => {
      const { error } = action.payload;
      state.orderProductData.loading = false;
      state.orderProductData.error = error;
    },
    // updateOrder
    updateOrderRequest: (state) => {
      state.updateOrderData.loading = true;
      state.updateOrderData.error = null;
    },
    updateOrderSuccess: (state, action) => {
      state.updateOrderData.loading = false;
    },
    updateOrderFailure: (state, action) => {
      const { error } = action.payload;
      state.updateOrderData.loading = false;
      state.updateOrderData.error = error;
    },
    // cancelOrder
    cancelOrderRequest: (state) => {
      state.cancelOrderData.loading = true;
      state.cancelOrderData.error = null;
    },
    cancelOrderSuccess: (state, action) => {
      state.cancelOrderData.loading = false;
    },
    cancelOrderFailure: (state, action) => {
      const { error } = action.payload;
      state.cancelOrderData.loading = false;
      state.cancelOrderData.error = error;
    },
    // completeOrder
    completeOrderRequest: (state) => {
      state.completeOrderData.loading = true;
      state.completeOrderData.error = null;
    },
    completeOrderSuccess: (state, action) => {
      state.completeOrderData.loading = false;
    },
    completeOrderFailure: (state, action) => {
      const { error } = action.payload;
      state.completeOrderData.loading = false;
      state.completeOrderData.error = error;
    },
  },
});

export const {
  getOrderListRequest,
  getOrderListSuccess,
  getOrderListFailure,
  orderProductRequest,
  orderProductSuccess,
  orderProductFailure,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFailure,
  cancelOrderRequest,
  cancelOrderSuccess,
  cancelOrderFailure,
  completeOrderRequest,
  completeOrderSuccess,
  completeOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
