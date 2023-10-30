import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
} from "../slicers/product.slice";

function* getProductListSaga(action) {
  try {
    const { page, limit, categoryId, more, searchKey, sortOrder } =
      action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _expand: "category",
        _page: page,
        _limit: limit,
        q: searchKey,
        categoryId: categoryId,
        ...(sortOrder && {
          _sort: "price",
          _order: sortOrder,
        }),
      },
    });

    yield put(
      getProductListSuccess({
        data: result.data,
        meta: {
          page: page,
          limit: limit,
          total: parseInt(result.headers["x-total-count"]),
        },
        more,
      })
    );
  } catch (e) {
    yield put(getProductListFailure({ error: "Lỗi" }));
  }
}

export default function* productSaga() {
  yield takeEvery(getProductListRequest, getProductListSaga);
}
