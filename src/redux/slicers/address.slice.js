import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressList: {
    data: [],
    loading: false,
    error: null,
  },
  createAddress: {
    loading: false,
    error: null,
  },
  updateAddress: {
    loading: false,
    error: null,
  },
  updateAddressDefault: {
    loading: false,
    error: null,
  },
  deleteAddress: {
    loading: false,
    error: null,
  },
  getDefaultAddress: {
    data: {},
    loading: false,
    error: null,
  },
  updateDefaultAddress: {
    loading: false,
    error: null,
  },
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    // getAddList
    getAddressListRequest: (state, action) => {
      state.addressList.loading = true;
      state.addressList.error = null;
    },
    getAddressListSuccess: (state, action) => {
      const { data } = action.payload;
      const newArray = [...data];
      const index = data.findIndex((item) => item.addressDefault === true);
      newArray.splice(index, 1);
      newArray.unshift(data[index]);
      state.addressList.loading = false;
      state.addressList.data = newArray;
    },
    getAddressListFailure: (state, action) => {
      const { error } = action.payload;
      state.addressList.loading = false;
      state.addressList.error = error;
    },
    // createAddress
    createAddressRequest: (state, action) => {
      state.createAddress.loading = true;
      state.createAddress.error = null;
    },
    createAddressSuccess: (state, action) => {
      state.createAddress.loading = false;
      state.createAddress.error = null;
    },
    createAddressFailure: (state, action) => {
      const { error } = action.payload;
      state.createAddress.loading = false;
      state.createAddress.error = error;
    },
    updateAddressRequest: (state, action) => {
      state.updateAddress.loading = true;
      state.updateAddress.error = null;
    },
    updateAddressSuccess: (state, action) => {
      state.updateAddress.loading = false;
      state.updateAddress.error = null;
    },
    updateAddressFailure: (state, action) => {
      const { error } = action.payload;
      state.updateAddress.loading = false;
      state.updateAddress.error = error;
    },
    // deleteAddress
    deleteAddressRequest: (state, action) => {
      state.deleteAddress.loading = true;
      state.deleteAddress.error = null;
    },
    deleteAddressSuccess: (state, action) => {
      state.deleteAddress.loading = false;
      state.deleteAddress.error = null;
    },
    deleteAddressFailure: (state, action) => {
      const { error } = action.payload;
      state.deleteAddress.loading = false;
      state.deleteAddress.error = error;
    },
    // updateAddressDefault
    updateAddressDefaultRequest: (state, action) => {
      state.updateAddressDefault.loading = true;
      state.updateAddressDefault.error = null;
    },
    updateAddressDefaultSuccess: (state, action) => {
      state.updateAddressDefault.loading = false;
      state.updateAddressDefault.error = null;
    },
    updateAddressDefaultFailure: (state, action) => {
      const { error } = action.payload;
      state.updateAddressDefault.loading = false;
      state.updateAddressDefault.error = error;
    },

    // getAddressDefault
    getAddressDefaultRequest: (state, action) => {
      state.getDefaultAddress.loading = true;
      state.updateDefaultAddress.error = null;
    },
    getAddressDefaultSuccess: (state, action) => {
      const { data } = action.payload;
      state.getDefaultAddress.data = data;
      state.getDefaultAddress.loading = false;
      state.getDefaultAddress.error = null;
    },
    getAddressDefaultFailure: (state, action) => {
      const { error } = action.payload;
      state.getDefaultAddress.loading = false;
      state.getDefaultAddress.error = error;
    },
  },
});

export const {
  getAddressListRequest,
  getAddressListSuccess,
  getAddressListFailure,
  createAddressRequest,
  createAddressSuccess,
  createAddressFailure,
  updateAddressRequest,
  updateAddressSuccess,
  updateAddressFailure,
  deleteAddressRequest,
  deleteAddressSuccess,
  deleteAddressFailure,
  updateAddressDefaultRequest,
  updateAddressDefaultSuccess,
  updateAddressDefaultFailure,
  getAddressDefaultRequest,
  getAddressDefaultSuccess,
  getAddressDefaultFailure,
} = addressSlice.actions;

export default addressSlice.reducer;
