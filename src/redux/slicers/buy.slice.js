import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productBuyList: JSON.parse(localStorage.getItem("productBuyList")) || [],
};

export const BuySlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    updateProductBuy: (state, action) => {
      const { selectedRows } = action.payload;
      state.productBuyList = selectedRows;
      localStorage.setItem("productBuyList", JSON.stringify(selectedRows));
    },
  },
});

export const { updateProductBuy } = BuySlice.actions;

export default BuySlice.reducer;
