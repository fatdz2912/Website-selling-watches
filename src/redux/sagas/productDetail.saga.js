import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
} from "../slicers/productDetail.slice";

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        id: id,
      },
    });
    yield put(
      getProductDetailSuccess({
        data: result.data[0],
      })
    );
  } catch (e) {
    yield put(getProductDetailFailure({ error: "Lỗi" }));
  }
}

export default function* productDetailSaga() {
  yield takeEvery(getProductDetailRequest, getProductDetailSaga);
}
