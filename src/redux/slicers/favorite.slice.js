import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: {
    data: [],
    loading: false,
    error: null,
  },
  favoriteProduct: {
    loading: false,
    error: null,
  },
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // getFavoriteList
    getFavoriteListRequest: (state, action) => {
      state.favoriteList.loading = true;
      state.favoriteList.error = null;
    },
    getFavoriteListSuccess: (state, action) => {
      const { data } = action.payload;
      state.favoriteList.data = data;
      state.favoriteList.loading = false;
    },
    getFavoriteListFailure: (state, action) => {
      const { error } = action.payload;
      state.favoriteList.loading = false;
      state.favoriteList.error = error;
    },
    // favoriteProduct
    favoriteProductRequest: (state, action) => {
      state.favoriteProduct.loading = true;
      state.favoriteProduct.error = null;
    },
    favoriteProductSuccess: (state, action) => {
      const { data } = action.payload;
      state.favoriteProduct.data = data;
      state.favoriteProduct.loading = false;
    },
    favoriteProductFailure: (state, action) => {
      const { error } = action.payload;
      state.favoriteProduct.loading = false;
      state.favoriteProduct.error = error;
    },
    // unFavoriteProduct
    unFavoriteProductRequest: (state, action) => {
      state.favoriteList.loading = true;
      state.favoriteList.error = null;
    },
    unFavoriteProductSuccess: (state, action) => {
      state.favoriteList.loading = false;
    },
    unFavoriteProductFailure: (state, action) => {
      const { error } = action.payload;
      state.favoriteList.loading = false;
      state.favoriteList.error = error;
    },
  },
});

export const {
  getFavoriteListRequest,
  getFavoriteListSuccess,
  getFavoriteListFailure,
  favoriteProductRequest,
  favoriteProductSuccess,
  favoriteProductFailure,
  unFavoriteProductRequest,
  unFavoriteProductSuccess,
  unFavoriteProductFailure,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
