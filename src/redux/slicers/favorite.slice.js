import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteList: {
    data: [],
    loading: false,
    error: null,
  },
  favouriteProduct: {
    loading: false,
    error: null,
  },
};

export const favouriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    // getFavoriteList
    getFavoriteListRequest: (state, action) => {
      state.favouriteList.loading = true;
      state.favouriteList.error = null;
    },
    getFavoriteListSuccess: (state, action) => {
      const { data } = action.payload;
      state.favouriteList.data = data;
      state.favouriteList.loading = false;
    },
    getFavoriteListFailure: (state, action) => {
      const { error } = action.payload;
      state.favouriteList.loading = false;
      state.favouriteList.error = error;
    },
    // favoriteProduct
    favoriteProductRequest: (state, action) => {
      state.favouriteProduct.loading = true;
      state.favouriteProduct.error = null;
    },
    favoriteProductSuccess: (state, action) => {
      const { data } = action.payload;
      state.favouriteProduct.data = data;
      state.favouriteProduct.loading = false;
    },
    favoriteProductFailure: (state, action) => {
      const { error } = action.payload;
      state.favouriteProduct.loading = false;
      state.favouriteProduct.error = error;
    },
    // unFavoriteProduct
    unFavoriteProductRequest: (state, action) => {
      state.favouriteList.loading = true;
      state.favouriteList.error = null;
    },
    unFavoriteProductSuccess: (state, action) => {
      const { data } = action.payload;
      state.favouriteList.data = data;
      state.favouriteList.loading = false;
    },
    unFavoriteProductFailure: (state, action) => {
      const { error } = action.payload;
      state.favouriteList.loading = false;
      state.favouriteList.error = error;
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
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
