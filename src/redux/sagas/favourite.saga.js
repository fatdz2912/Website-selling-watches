import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getFavoriteListRequest,
  getFavoriteListSuccess,
  getFavoriteListFailure,
  favoriteProductRequest,
  favoriteProductSuccess,
  favoriteProductFailure,
  unFavoriteProductRequest,
  unFavoriteProductSuccess,
  unFavoriteProductFailure,
} from "../slicers/favorite.slice";

import { getProductDetailRequest } from "../slicers/product.slice";

function* getFavoriteListSaga(action) {
  try {
    const { userId, page, limit } = action.payload;
    const result = yield axios.get("http://localhost:4000/favourites", {
      params: {
        isDelete: false,
        userId: userId,
        _expand: "product",
        _page: page,
        _limit: limit,
      },
    });
    yield put(
      getFavoriteListSuccess({
        meta: {
          page: page,
          limit: limit,
          total: parseInt(result.headers["x-total-count"]),
        },
      })
    );
  } catch (e) {
    yield put(getFavoriteListFailure({ error: "Lỗi" }));
  }
}
function* favoriteProductSaga(action) {
  try {
    const result = yield axios.post(
      "http://localhost:4000/favorites",
      action.payload
    );
    yield put(favoriteProductSuccess({ data: result.data }));
  } catch (e) {
    yield put(favoriteProductFailure({ error: "Lỗi" }));
  }
}
function* unFavoriteProductSaga(action) {
  try {
    const { id, userId } = action.payload;
    const result = yield axios.delete(
      `http://localhost:4000/favourites/${id}`,
      action.payload
    );
    yield put(unFavoriteProductSuccess({ data: result.data }));
  } catch (e) {
    yield put(unFavoriteProductFailure({ error: "Lỗi" }));
  }
}

export default function* favouriteSaga() {
  yield takeEvery(getFavoriteListRequest, getFavoriteListSaga);
  yield takeEvery(favoriteProductRequest, favoriteProductSaga);
  yield takeEvery(unFavoriteProductRequest, unFavoriteProductSaga);
}
