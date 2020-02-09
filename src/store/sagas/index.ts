import { takeEvery, takeLatest, all } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";


import { fetchTrendingSaga } from "./trendingMovies";
import { getMovieSaga } from "./getMovie";
import { fetchFavouriteSaga, saveFavouriteSaga, removeFavouriteSaga } from "./favouriteMovies";
import { fetchSearchSaga } from "./searchMovies";
import { fetchRecommendedSaga } from './recommendedMovies';

export function* watchTrending() {
  yield takeEvery(actionTypes.TRENDING_REQUEST, fetchTrendingSaga);
}

export function* getMovie() {
  yield takeLatest(actionTypes.MOVIE_REQUEST, getMovieSaga);
}

export function* watchFavourites() {
	yield takeEvery(actionTypes.FAV_MOVIE_REQUEST, fetchFavouriteSaga);
}

export function* watchFavouriteIds() {
	yield all([
	  takeEvery(actionTypes.ADD_FAV_ID, saveFavouriteSaga),
	  takeEvery(actionTypes.DEL_FAV_ID, removeFavouriteSaga),
	]);
} 

export function* watchSearch() {
	yield takeEvery(actionTypes.SEARCH_REQUEST, fetchSearchSaga);
}

export function* watchRecommended() {
  yield takeEvery(actionTypes.RECOMMENDED_REQUEST, fetchRecommendedSaga);
}