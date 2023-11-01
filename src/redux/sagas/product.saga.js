import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
  getProductDetailRequest,
  getProductDetailSuccess,
  getProductDetailFailure,
  getDiscountProductListRequest,
  getDiscountProductListSuccess,
  getDiscountProductListFailure,
} from "../slicers/product.slice";

function* getProductListSaga(action) {
  try {
    const {
      page,
      limit,
      categoryId,
      more,
      searchKey,
      sortOrder,
      discountOrder,
    } = action.payload;
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
        ...(discountOrder && {
          _sort: "discount",
          _order: discountOrder,
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

function* getProductDiscountListSaga(action) {
  try {
    const { limit, discountOrder } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _limit: limit,
        ...(discountOrder && {
          _sort: "discount",
          _order: discountOrder,
        }),
      },
    });
    yield put(
      getDiscountProductListSuccess({
        data: result.data,
        meta: {
          limit: limit,
          total: parseInt(result.headers["x-total-count"]),
        },
      })
    );
  } catch (e) {
    yield put(getDiscountProductListFailure({ error: "Lỗi" }));
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _expand: "category",
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
export default function* productSaga() {
  yield takeEvery(getProductListRequest, getProductListSaga);
  yield takeEvery(getDiscountProductListRequest, getProductDiscountListSaga);
  yield takeEvery(getProductDetailRequest, getProductDetailSaga);
}
