import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginLock,
  registerRequest,
  registerFailure,
  registerSuccess,
  getUserInfoFailure,
  getUserInfoRequest,
  getUserInfoSuccess,
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
} from "../slicers/auth.slice";
function* loginSaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.post("http://localhost:4000/login", data);
    if (result.data.user.isDelete) {
      yield notification.error({
        message: "Tài khoản đã bị khóa,vui lòng LH:0377460815!",
      });
      yield put(loginLock({}));
    } else {
      yield localStorage.setItem("accessToken", result.data.accessToken);
      yield put(loginSuccess({ data: result.data.user }));
    }
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
function* getUserListSaga(action) {
  try {
    const { page, limit, more, searchKey } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users`, {
      params: {
        ...(searchKey && { q: searchKey }),
      },
    });
    yield put(getUserListSuccess({ data: result.data, page, limit, more }));
  } catch (e) {
    yield put(getUserListFailure({ error: "Lỗi" }));
  }
}
function* changePasswordSaga(action) {
  try {
    const { data, reset, userId } = action.payload;
    yield axios.post("http://localhost:4000/login", data);
    const result = yield axios.patch(`http://localhost:4000/users/${userId}`, {
      password: data.newPassword,
    });
    yield put(changePasswordSuccess({ data: result.data }));
    yield reset();
    notification.success({ message: "Thay đổi mật khẩu thành công" });
  } catch (e) {
    yield put(changePasswordFailure({ error: "Mật khẩu không đúng!" }));
  }
}
function* updateUserInfoSaga(action) {
  try {
    const { id, data } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/users/${id}`, data);
    yield put(updateUserInfoSuccess({ data: result.data }));
  } catch (e) {
    yield put(updateUserInfoFailure({ error: "Lỗi" }));
  }
}

function* changeAvatarSaga(action) {
  try {
    const { id, avatar } = action.payload;
    yield axios.patch(`http://localhost:4000/users/${id}`, { avatar: avatar });
    yield put(changeAvatarSuccess({ avatar: avatar }));
  } catch (e) {
    yield put(changeAvatarFailure({ error: "Lỗi" }));
  }
}
function* lockAccountSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.patch(`http://localhost:4000/users/${id}`, {
      isDelete: true,
    });
    yield put(lockAccountSuccess());
    yield put(getUserListRequest({}));
  } catch (e) {
    yield put(lockAccountFailure({ error: "Lỗi" }));
  }
}
function* openAccountSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.patch(`http://localhost:4000/users/${id}`, {
      isDelete: false,
    });
    yield put(openAccountSuccess());
    yield put(getUserListRequest({}));
  } catch (e) {
    yield put(openAccountFailure({ error: "Lỗi" }));
  }
}
export default function* authSaga() {
  yield takeEvery(loginRequest, loginSaga);
  yield takeEvery(registerRequest, registerSaga);
  yield takeEvery(getUserInfoRequest, getUserInfoSaga);
  yield takeEvery(changePasswordRequest, changePasswordSaga);
  yield takeEvery(updateUserInfoRequest, updateUserInfoSaga);
  yield takeEvery(changeAvatarRequest, changeAvatarSaga);
  yield takeEvery(getUserListRequest, getUserListSaga);
  yield takeEvery(lockAccountRequest, lockAccountSaga);
  yield takeEvery(openAccountRequest, openAccountSaga);
}
