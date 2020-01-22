import { takeEvery, all, takeLatest } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";


import { fetchTrendingSaga } from "./trendingMovies";

export function* watchTrending() {
  yield takeEvery(actionTypes.TRENDING_REQUEST, fetchTrendingSaga);
}