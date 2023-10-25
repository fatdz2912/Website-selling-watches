import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import productReducer from "./redux/slicers/product.slice";
import categoryReducer from "./redux/slicers/category.slice";
import productDetailReducer from "./redux/slicers/productDetail.slice";
import rootSaga from "./redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    productDetail: productDetailReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
