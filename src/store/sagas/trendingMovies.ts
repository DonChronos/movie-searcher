import { put, select } from "redux-saga/effects";

import axios from "../../utility/axios";
import { API_KEY } from "../../utility/API_KEY";
import * as actions from "../actions/trendingMovies";
import { getLanguage } from "./selector";

export function* fetchTrendingSaga(action: any) {
  yield put(actions.fetchTrendingStart());
  try {
	const language = yield select(getLanguage);
    const res = yield axios.get(`/trending/movie/week?api_key=${API_KEY}&page=${action.page}&language=${language}`);
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
      actions.fetchTrendingSuccess(total_pages, mappedMovieCardsData)
    );
  } catch (error) {
    yield put(actions.fetchTrendingFail(error));
  }
}