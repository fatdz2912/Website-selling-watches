import { fork } from "redux-saga/effects";

import productSaga from "./product.saga";
import categorySaga from "./category.saga";
import authSaga from "./auth.saga";
import reviewSaga from "./review.saga";
import locationSaga from "./location.saga";
import orderSaga from "./order.saga";
import favouriteSaga from "./favourite.saga";
import addressSaga from "./address.saga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(productSaga);
  yield fork(categorySaga);
  yield fork(reviewSaga);
  yield fork(locationSaga);
  yield fork(orderSaga);
  yield fork(favouriteSaga);
  yield fork(addressSaga);
}
