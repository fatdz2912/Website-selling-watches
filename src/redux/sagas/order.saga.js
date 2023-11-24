import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  getOrderListRequest,
  getOrderListSuccess,
  getOrderListFailure,
  orderProductRequest,
  orderProductSuccess,
  orderProductFailure,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFailure,
  cancelOrderRequest,
  cancelOrderSuccess,
  cancelOrderFailure,
  completeOrderRequest,
  completeOrderSuccess,
  completeOrderFailure,
} from "../slicers/order.slice";
import { clearCart } from "../slicers/cart.slice";

function* getOrderListSaga(action) {
  try {
    const { userId, page, limit, more } = action.payload;
    let result;
    if (userId) {
      result = yield axios.get("http://localhost:4000/orders", {
        params: {
          _embed: "orderDetails",
          userId: userId,
          _sort: "createdAt",
          _order: "desc",
          _page: page,
          _limit: limit,
        },
      });
    } else {
      result = yield axios.get("http://localhost:4000/orders", {
        params: {
          _embed: "orderDetails",
          isDelete: false,
          _sort: "createdAt",
          _order: "desc",
        },
      });
    }

    yield put(
      getOrderListSuccess({
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
    yield put(getOrderListFailure({ error: "Lỗi" }));
  }
}
function* orderProductSaga(action) {
  try {
    const { orderData, productBuyList, callback, orderId } = action.payload;
    const orderResult = yield axios.post(
      "http://localhost:4000/orders",
      orderData
    );
    for (let i = 0; i < productBuyList.length; i++) {
      yield axios.post("http://localhost:4000/orderDetails", {
        ...productBuyList[i],
        orderId: orderResult.data.id,
        uuid: orderId,
      });
    }
    yield put(clearCart());
    yield put(
      orderProductSuccess({
        data: {
          ...orderData,
        },
      })
    );
    yield callback();
  } catch (e) {
    yield put(orderProductFailure({ error: "Lỗi" }));
  }
}
function* updateOrderSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/orders/${id}`, {
      status: "confirm",
    });
    yield put(updateOrderSuccess({ data: result.data }));
    yield put(getOrderListRequest({}));
  } catch (e) {
    yield put(updateOrderFailure({ error: "Lỗi" }));
  }
}
function* cancelOrderSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/orders/${id}`, {
      status: "cancel",
      isDelete: true,
    });
    yield put(cancelOrderSuccess({ data: result.data }));
    yield put(getOrderListRequest({}));
  } catch (e) {
    yield put(cancelOrderFailure({ error: "Lỗi" }));
  }
}
function* completeOrderSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/orders/${id}`, {
      status: "complete",
      isDelete: true,
    });
    yield put(completeOrderSuccess({ data: result.data }));
    yield put(getOrderListRequest({}));
  } catch (e) {
    yield put(completeOrderFailure({ error: "Lỗi" }));
  }
}
export default function* orderSaga() {
  yield takeEvery(getOrderListRequest, getOrderListSaga);
  yield takeEvery(orderProductRequest, orderProductSaga);
  yield takeEvery(updateOrderRequest, updateOrderSaga);
  yield takeEvery(cancelOrderRequest, cancelOrderSaga);
  yield takeEvery(completeOrderRequest, completeOrderSaga);
}
