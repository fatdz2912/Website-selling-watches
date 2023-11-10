import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cartList")) || [],
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
    },
    updateCart: (state, action) => {
      const { productId, quantity } = action.payload;
      let newCartList = [...state.cartList];
      const productExistIndex = state.cartList.findIndex(
        (item) => item.productId === productId
      );
      newCartList.splice(productExistIndex, 1, {
        ...state.cartList[productExistIndex],
        quantity: quantity,
      });
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
  },
});

export const { addCart, updateCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
