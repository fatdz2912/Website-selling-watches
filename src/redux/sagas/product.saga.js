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
  addProductRequest,
  addProductFailure,
  addProductSuccess,
  updateProductRequest,
  updateProductFailure,
  updateProductSuccess,
  deleteProductRequest,
  deleteProductFailure,
  deleteProductSuccess,
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
        _expand: "category",
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
function* addProductSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.post("http://localhost:4000/products", data);
    yield put(getProductListRequest());
    yield put(addProductSuccess({ data }));
  } catch (e) {
    yield put(addProductFailure({ error: "Lỗi" }));
  }
}
function* updateProductSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.patch(`http://localhost:4000/products/${data.id}`, data);
    yield put(getProductListRequest());
    yield put(updateProductSuccess({ data }));
  } catch (e) {
    yield put(updateProductFailure({ error: "Lỗi" }));
  }
}
function* deleteProductSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.delete(`http://localhost:4000/products/${data.id}`, data);
    yield put(getProductListRequest());
    yield put(deleteProductSuccess({ id: data.id }));
  } catch (e) {
    yield put(deleteProductFailure({ error: "Lỗi" }));
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
  yield takeEvery(addProductRequest, addProductSaga);
  yield takeEvery(updateProductRequest, updateProductSaga);
  yield takeEvery(deleteProductRequest, deleteProductSaga);
}
