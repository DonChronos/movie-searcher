import { takeEvery, takeLatest } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";


import { fetchTrendingSaga } from "./trendingMovies";
import { getMovieSaga } from "./getMovie";

export function* watchTrending() {
  yield takeEvery(actionTypes.TRENDING_REQUEST, fetchTrendingSaga);
}

export function* getMovie() {
  yield takeLatest(actionTypes.MOVIE_REQUEST, getMovieSaga);
}