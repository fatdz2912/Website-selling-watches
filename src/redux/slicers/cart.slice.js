import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],
  productBuyList: JSON.parse(localStorage.getItem("productBuyList")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { data } = action.payload;
      let newCartList = [...state.cartList];
      const productExistIndex = state.cartList.findIndex(
        (item) => item.productId === data.productId
      );
      if (productExistIndex !== -1) {
        newCartList.splice(productExistIndex, 1, {
          ...state.cartList[productExistIndex],
          quantity: state.cartList[productExistIndex].quantity + data.quantity,
        });
      } else {
        newCartList = [data, ...state.cartList];
      }
      localStorage.setItem("cartList", JSON.stringify(newCartList));
      state.cartList = newCartList;
      notification.success({ message: "Thêm vào giỏ thành công!" });
    },
    updateCart: (state, action) => {
      const {
        productId,
        quantity,
        setTotalPrice,
        selectedRows,
        setSelectedRows,
      } = action.payload;
      let newCartList = [...state.cartList];
      const productExistIndex = state.cartList.findIndex(
        (item) => item.productId === productId
      );
      newCartList.splice(productExistIndex, 1, {
        ...state.cartList[productExistIndex],
        quantity: quantity,
      });
      const selectedRowExist = selectedRows.findIndex(
        (item) => item.productId === productId
      );
      if (selectedRowExist !== -1) {
        const newSelectedRows = [...selectedRows];
        newSelectedRows.splice(selectedRowExist, 1, {
          ...selectedRows[selectedRowExist],
          quantity: quantity,
        });
        setSelectedRows(newSelectedRows);
        setTotalPrice(
          newSelectedRows.reduce(
            (total, item) => total + item.currentPrice * item.quantity,
            0
          )
        );
      }
      localStorage.setItem("cartList", JSON.stringify(newCartList));
      state.cartList = newCartList;
    },
    deleteCart: (state, action) => {
      const { productId } = action.payload;
      let newCartList = state.cartList.filter(
        (item) => item.productId !== productId
      );
      localStorage.setItem("cartList", JSON.stringify(newCartList));
      state.cartList = newCartList;
    },
    clearCart: (state, action) => {
      for (let i = 0; i < state.productBuyList.length; i++) {
        const newCartList = state.cartList.filter(
          (item) => item.productId !== state.productBuyList[i].productId
        );
        state.cartList = newCartList;
      }
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
    updateProductBuy: (state, action) => {
      const { selectedRows } = action.payload;
      state.productBuyList = selectedRows;
      localStorage.setItem("productBuyList", JSON.stringify(selectedRows));
    },
  },
});

export const { addCart, updateCart, deleteCart, clearCart, updateProductBuy } =
  cartSlice.actions;

export default cartSlice.reducer;
