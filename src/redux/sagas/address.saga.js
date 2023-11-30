import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
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
} from "../slicers/address.slice";
function* getAddressListSaga(action) {
  try {
    const { userId, addressDefaultId } = action.payload;
    const result = yield axios.get("http://localhost:4000/addresses", {
      params: {
        userId: userId,
        isDelete: false,
        _expand: "user",
      },
    });
    yield put(getAddressListSuccess({ data: result.data, addressDefaultId }));
  } catch (e) {
    yield put(getAddressListFailure({ error: "Lỗi" }));
  }
}
function* createAddressSaga(action) {
  try {
    const { data, quantityAddress, addressDefault } = action.payload;
    const result = yield axios.post("http://localhost:4000/addresses", data);
    if (quantityAddress === 0 || addressDefault) {
      yield axios.patch(`http://localhost:4000/users/${data.userId}`, {
        addressDefaultId: result.data.id,
      });
    }
    yield put(
      createAddressSuccess({
        data: result?.data,
        addressDefault: addressDefault,
      })
    );
  } catch (e) {
    yield put(createAddressFailure({ error: "Lỗi" }));
  }
}
function* updateAddressSaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/addresses/${data.id}`,
      data
    );
    yield put(
      updateAddressSuccess({
        data: result.data,
      })
    );
  } catch (e) {
    yield put(updateAddressFailure({ error: "Lỗi" }));
  }
}
function* deleteAddressSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.patch(`http://localhost:4000/addresses/${id}`, {
      isDelete: true,
    });
    yield put(deleteAddressSuccess({ id: id }));
  } catch (e) {
    yield put(deleteAddressFailure({ error: "Lỗi" }));
  }
}
function* updateAddressDefaultSaga(action) {
  try {
    const { addressId, userId } = action.payload;
    if (userId) {
      yield axios.patch(`http://localhost:4000/users/${userId}`, {
        addressDefaultId: addressId,
      });
    }
    yield put(updateAddressDefaultSuccess({ addressId: addressId }));
  } catch (e) {
    yield put(updateAddressDefaultFailure({ error: "Lỗi" }));
  }
}
export default function* orderSaga() {
  yield takeEvery(getAddressListRequest, getAddressListSaga);
  yield takeEvery(createAddressRequest, createAddressSaga);
  yield takeEvery(updateAddressRequest, updateAddressSaga);
  yield takeEvery(deleteAddressRequest, deleteAddressSaga);
  yield takeEvery(updateAddressDefaultRequest, updateAddressDefaultSaga);
}
