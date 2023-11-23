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
  updateProductDetailRequest,
  updateProductDetailFailure,
  updateProductDetailSuccess,
  getSearchSuggestionRequest,
  getSearchSuggestionFailure,
  getSearchSuggestionSuccess,
  createSearchHistoryRequest,
  createSearchHistorySuccess,
  createSearchHistoryFailure,
  getSearchHistoryRequest,
  getSearchHistorySuccess,
  getSearchHistoryFailure,
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
function* getSearchSuggestionsSaga(action) {
  try {
    const { limit, searchKey } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _limit: limit,
        q: searchKey,
      },
    });

    yield put(
      getSearchSuggestionSuccess({
        data: result.data,
        searchKey: searchKey,
      })
    );
  } catch (e) {
    yield put(getSearchSuggestionFailure({ error: "Lỗi" }));
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
    yield put(
      updateProductDetailRequest({ id: id, searchTop: result.data.searchTop })
    );
  } catch (e) {
    yield put(getProductDetailFailure({ error: "Lỗi" }));
  }
}
function* updateProductDetailSaga(action) {
  try {
    const { id, searchTop } = action.payload;
    yield axios.patch(`http://localhost:4000/products/${id}`, {
      searchTop: searchTop + 1,
    });
    yield put(updateProductDetailSuccess());
  } catch (e) {
    yield put(updateProductDetailFailure({ error: "Lỗi" }));
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
function* createSearchHistorySaga(action) {
  try {
    const { data } = action.payload;
    const result = yield axios.post(`http://localhost:4000/searches`, data);
    yield put(createSearchHistorySuccess({ data: result.data }));
  } catch (e) {
    yield put(createSearchHistoryFailure({ error: "Lỗi" }));
  }
}
function* getSearchHistorySaga(action) {
  try {
    const { limit, userId } = action.payload;
    const result = yield axios.get(`http://localhost:4000/searches`, {
      params: {
        _limit: limit,
        _sort: "createdAt",
        _order: "desc",
        isDelete: false,
        userId: userId,
      },
    });

    yield put(
      getSearchHistorySuccess({
        data: result.data,
      })
    );
  } catch (e) {
    yield put(getSearchHistoryFailure({ error: "Lỗi" }));
  }
}
export default function* productSaga() {
  yield takeEvery(getProductListRequest, getProductListSaga);
  yield takeEvery(getProductDetailRequest, getProductDetailSaga);
  yield takeEvery(updateProductDetailRequest, updateProductDetailSaga);
  yield takeEvery(addProductRequest, addProductSaga);
  yield takeEvery(getDiscountProductListRequest, getProductDiscountListSaga);
  yield takeEvery(updateProductRequest, updateProductSaga);
  yield takeEvery(deleteProductRequest, deleteProductSaga);
  yield takeEvery(getSearchSuggestionRequest, getSearchSuggestionsSaga);
  yield takeEvery(createSearchHistoryRequest, createSearchHistorySaga);
  yield takeEvery(getSearchHistoryRequest, getSearchHistorySaga);
}
