import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  getOrderListRequest,
  getOrderListSuccess,
  getOrderListFailure,
  orderProductRequest,
  orderProductSuccess,
  orderProductFailure,
} from "../slicers/order.slice";
import { clearCart } from "../slicers/cart.slice";

function* getOrderListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get("http://localhost:4000/orders", {
      params: {
        _embed: "orderDetails",
        userId: parseInt(userId),
      },
    });
    yield put(getOrderListSuccess({ data: result.data }));
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

export default function* orderSaga() {
  yield takeEvery(getOrderListRequest, getOrderListSaga);
  yield takeEvery(orderProductRequest, orderProductSaga);
}
