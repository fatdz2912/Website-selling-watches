import { createSlice } from "@reduxjs/toolkit";

import {
  updateAddressDefaultSuccess,
  createAddressSuccess,
} from "./address.slice";
import { notification } from "antd";
import { Navigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

const initialState = {
  userInfo: {
    data: {},
    loading: true,
    error: null,
  },
  userList: {
    data: [],
    meta: {},
    loading: true,
    error: null,
  },
  loginData: {
    loading: false,
    error: null,
  },
  registerData: {
    loading: false,
    error: null,
  },
  changePassword: {
    loading: false,
    error: null,
  },
  updateUserInfoData: {
    loading: false,
    error: null,
  },
  changeAvatarData: {
    loadding: false,
    error: null,
  },
  lockAccount: {
    loadding: false,
    error: null,
  },
  openAccount: {
    loadding: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login
    loginRequest: (state, action) => {
      state.loginData.loading = true;
      state.loginData.error = null;
    },
    loginSuccess: (state, action) => {
      const { data } = action.payload;
      state.userInfo.data = data;
      state.loginData.loading = false;
      state.userInfo.loading = false;
    },
    loginLock: (state, action) => {
      state.loginData.error = null;
      state.loginData.loading = false;
    },
    loginFailure: (state, action) => {
      const { error } = action.payload;
      state.loginData.loading = false;
      state.loginData.error = error;
    },
    // register
    registerRequest: (state, action) => {
      state.registerData.loading = true;
      state.registerData.error = null;
    },
    registerSuccess: (state, action) => {
      state.registerData.loading = false;
    },
    registerFailure: (state, action) => {
      const { error } = action.payload;
      state.registerData.loading = false;
      state.registerData.error = error;
    },
    // logout
    logoutRequest: (state) => {
      state.userInfo.data = {};
      localStorage.removeItem("accessToken");
    },
    // getUserInfo
    getUserInfoRequest: (state, action) => {
      state.userInfo.loading = true;
      state.userInfo.error = null;
    },
    getUserInfoSuccess: (state, action) => {
      const { data } = action.payload;
      state.userInfo.data = data;
      state.userInfo.loading = false;
    },
    getUserInfoFailure: (state, action) => {
      const { error } = action.payload;
      state.userInfo.loading = false;
      state.userInfo.error = error;
    },
    // getUserList
    getUserListRequest: (state, action) => {
      state.userList.loading = true;
      state.userList.error = null;
    },
    getUserListSuccess: (state, action) => {
      const { data } = action.payload;
      state.userList.data = data;
      state.userList.loading = false;
    },
    getUserListFailure: (state, action) => {
      const { error } = action.payload;
      state.userList.loading = false;
      state.userList.error = error;
    },
    // Change password
    changePasswordRequest: (state, action) => {
      state.changePassword.loading = true;
      state.changePassword.error = null;
    },
    changePasswordSuccess: (state, action) => {
      state.changePassword.loading = false;
    },
    changePasswordFailure: (state, action) => {
      const { error } = action.payload;
      state.changePassword.loading = false;
      state.changePassword.error = error;
    },
    // updateUserInfo
    updateUserInfoRequest: (state, action) => {
      state.updateUserInfoData.loading = true;
      state.updateUserInfoData.error = null;
    },
    updateUserInfoSuccess: (state, action) => {
      const { data } = action.payload;
      state.updateUserInfoData.data = data;
      state.updateUserInfoData.loading = false;
    },
    updateUserInfoFailure: (state, action) => {
      const { error } = action.payload;
      state.updateUserInfoData.loading = false;
      state.updateUserInfoData.error = error;
    },
    // changeAvatar
    changeAvatarRequest: (state, action) => {
      state.changeAvatarData.loading = true;
      state.changeAvatarData.error = null;
    },
    changeAvatarSuccess: (state, action) => {
      const { avatar } = action.payload;
      state.changeAvatarData.loading = false;
      state.userInfo.data.avatar = avatar;
    },
    changeAvatarFailure: (state, action) => {
      const { error } = action.payload;
      state.changeAvatarData.loading = false;
      state.changeAvatarData.error = error;
    },
    // lockAccount
    lockAccountRequest: (state, action) => {
      state.lockAccount.loading = true;
      state.lockAccount.error = null;
    },
    lockAccountSuccess: (state, action) => {
      state.lockAccount.loading = false;
      notification.success({ message: "Khóa tài khoản thành công" });
    },
    lockAccountFailure: (state, action) => {
      const { error } = action.payload;
      state.lockAccount.loading = false;
      state.lockAccount.error = error;
    },
    // openAccount
    openAccountRequest: (state, action) => {
      state.openAccount.loading = true;
      state.openAccount.error = null;
    },
    openAccountSuccess: (state, action) => {
      state.openAccount.loading = false;
      notification.success({ message: "Mở tài khoản thành công" });
    },
    openAccountFailure: (state, action) => {
      const { error } = action.payload;
      state.openAccount.loading = false;
      state.openAccount.error = error;
    },
  },
  extraReducers: {
    [updateAddressDefaultSuccess]: (state, action) => {
      const { addressId } = action.payload;
      state.userInfo.data.addressDefaultId = addressId;
    },
    [createAddressSuccess]: (state, action) => {
      const { data, addressDefault } = action.payload;
      if (addressDefault) {
        state.userInfo.data.addressDefaultId = data.id;
      }
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginLock,
  loginFailure,
  registerRequest,
  registerFailure,
  registerSuccess,
  getUserInfoFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  logoutRequest,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  updateUserInfoFailure,
  changeAvatarRequest,
  changeAvatarSuccess,
  changeAvatarFailure,
  getUserListRequest,
  getUserListSuccess,
  getUserListFailure,
  lockAccountRequest,
  lockAccountSuccess,
  lockAccountFailure,
  openAccountRequest,
  openAccountSuccess,
  openAccountFailure,
} = authSlice.actions;

export default authSlice.reducer;
