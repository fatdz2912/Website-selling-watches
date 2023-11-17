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
      gender,
    } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _expand: "category",
        _page: page,
        _limit: limit,
        q: searchKey,
        categoryId: categoryId,
        ...(sortOrder && {
          _sort: sortOrder.split(".")[0],
          _order: sortOrder.split(".")[1],
          isDelete: false,
        }),
        ...(discountOrder && {
          _sort: "discount",
          _order: discountOrder,
        }),
        ...(gender && {
          gender: gender,
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

function* addProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.post("http://localhost:4000/products", data);
    yield put(
      getProductListRequest({
        sortOrder: "createdAt.desc",
      })
    );
    yield put(addProductSuccess({ data }));
    yield callback();
  } catch (e) {
    yield put(addProductFailure({ error: "Lỗi" }));
  }
}
function* updateProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.patch(`http://localhost:4000/products/${data.id}`, data);
    yield put(updateProductSuccess({ data }));
    yield callback();
  } catch (e) {
    yield put(updateProductFailure({ error: "Lỗi" }));
  }
}
function* deleteProductSaga(action) {
  try {
    const { data } = action.payload;
    yield axios.patch(`http://localhost:4000/products/${data.id}`, {
      isDelete: true,
    });
    yield put(getProductListRequest());
    yield put(deleteProductSuccess({ id: data.id }));
  } catch (e) {
    yield put(deleteProductFailure({ error: "Lỗi" }));
  }
}
function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/products/${id}`, {
      params: {
        _expand: "category",
        _embed: "favorites",
        isDelete: false,
      },
    });
    yield put(
      getProductDetailSuccess({
        data: result.data,
      })
    );
  } catch (e) {
    yield put(getProductDetailFailure({ error: "Lỗi" }));
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
          _expand: "category",
          isDelete: false,
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
export default function* productSaga() {
  yield takeEvery(getProductListRequest, getProductListSaga);
  yield takeEvery(getProductDetailRequest, getProductDetailSaga);
  yield takeEvery(addProductRequest, addProductSaga);
  yield takeEvery(getDiscountProductListRequest, getProductDiscountListSaga);
  yield takeEvery(updateProductRequest, updateProductSaga);
  yield takeEvery(deleteProductRequest, deleteProductSaga);
}
