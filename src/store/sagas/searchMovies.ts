import { put } from "redux-saga/effects";

import axios from "../../utility/axios";
import { API_KEY } from "../../utility/API_KEY";
import * as actions from "../actions/searchMovies";

export function* fetchSearchSaga(action: any) {
  yield put(actions.fetchSearchStart());
  try {
	console.log(action);
    const res = yield axios.get(`/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(action.query)}&page=${action.page}`);
    const { data } = res;
	const { total_pages } = data;
	const mappedMovieCardsData = data.results.map((movie: any) => {
		const { id, poster_path, title } = movie;
		return {
			id,
			title,
			posterUrl: poster_path,
		}
	})
	yield put(
      actions.fetchSearchSuccess(total_pages, mappedMovieCardsData)
    );
  } catch (error) {
    yield put(actions.fetchSearchFail(error));
  }
}