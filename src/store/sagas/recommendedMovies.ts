import { put, select } from "redux-saga/effects";

import axios from "../../utility/axios";
import { API_KEY } from "../../utility/API_KEY";
import * as actions from "../actions/recommendedMovies";
import { getLanguage } from "./selector";

export function* fetchRecommendedSaga(action: any) {
  yield put(actions.fetchRecommendedStart());
  try {
	const language = yield select(getLanguage);
    const res = yield axios.get(`movie/${action.id}/recommendations?api_key=${API_KEY}&page=1&language=${language}`);
    const { data } = res;
	const mappedMovieCardsData = data.results.map((movie: any) => {
		const { id, poster_path, title } = movie;
		return {
			id,
			title,
			posterUrl: poster_path,
		}
	})
	yield put(
      actions.fetchRecommendedSuccess(mappedMovieCardsData)
    );
  } catch (error) {
    yield put(actions.fetchRecommendedFail(error));
  }
}