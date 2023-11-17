import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  getCityListRequest,
  getCityListSuccess,
  getCityListFailure,
  getDistrictListRequest,
  getDistrictListSuccess,
  getDistrictListFailure,
  getWardListRequest,
  getWardListSuccess,
  getWardListFailure,
} from "../slicers/location.slice";

function* getCityListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/cities");
    yield put(getCityListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getCityListFailure({ error: "Lỗi" }));
  }
}
function* getDistrictListSaga(action) {
  try {
    const { cityCode, name } = action.payload;
    let result;
    if (cityCode) {
      result = yield axios.get("http://localhost:4000/districts", {
        params: {
          parentcode: cityCode,
        },
      });
    } else {
      result = yield axios.get("http://localhost:4000/districts", {
        params: {
          name: name,
        },
      });
    }
    yield put(getDistrictListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getDistrictListFailure({ error: "Lỗi" }));
  }
}
function* getWardListSaga(action) {
  try {
    const { districtCode, name } = action.payload;
    let result;
    if (districtCode) {
      result = yield axios.get("http://localhost:4000/wards", {
        params: {
          parentcode: districtCode,
        },
      });
    } else {
      result = yield axios.get("http://localhost:4000/wards", {
        params: {
          name: name,
        },
      });
    }
    yield put(getWardListSuccess({ data: result.data }));
  } catch (e) {
    yield put(getWardListFailure({ error: "Lỗi" }));
  }
}

export default function* LocationSaga() {
  yield takeEvery(getCityListRequest, getCityListSaga);
  yield takeEvery(getDistrictListRequest, getDistrictListSaga);
  yield takeEvery(getWardListRequest, getWardListSaga);
}
