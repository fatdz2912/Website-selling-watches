import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerFailure,
  registerSuccess,
  getUserInfoFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
} from "../slicers/auth.slice";
function* loginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/login", data);
    yield callback();
    yield localStorage.setItem("accessToken", result.data.accessToken);
    yield put(loginSuccess({ data: result.data.user }));
  } catch (e) {
    yield put(loginFailure({ error: "Email hoặc mật khẩu không đúng!" }));
  }
}
function* registerSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.post("http://localhost:4000/register", data);
    yield callback();
    yield put(registerSuccess());
    notification.success({
      message: "Đăng ký thành công!",
    });
  } catch (e) {
    yield put(
      registerFailure({
        error:
          e.response.data === "Email already exists"
            ? "Email đã tồn tại"
            : "Lỗi",
      })
    );
  }
}
function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`);
    yield put(getUserInfoSuccess({ data: result.data }));
  } catch (e) {
    yield put(getUserInfoFailure({ error: "Lỗi" }));
  }
}
function* changePasswordSaga(action) {
  try {
    const { data, reset } = action.payload;
    const result = yield axios.post("http://localhost:4000/login", data);
    yield localStorage.setItem("accessToken", result.data.accessToken);
    yield put(changePasswordSuccess({ data: result.data.user }));
    yield reset();
    notification.success({ message: "Thay đổi mật khẩu thành công" });
  } catch (e) {
    yield put(changePasswordFailure({ error: "Mật khẩu không đúng!" }));
  }
}
export default function* categorySaga() {
  yield takeEvery(loginRequest, loginSaga);
  yield takeEvery(registerRequest, registerSaga);
  yield takeEvery(getUserInfoRequest, getUserInfoSaga);
  yield takeEvery(changePasswordRequest, changePasswordSaga);
}
