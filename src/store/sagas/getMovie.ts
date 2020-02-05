import { put, select } from "redux-saga/effects";

import axios from "../../utility/axios";
import { API_KEY } from "../../utility/API_KEY";
import * as actions from "../actions/getMovie";
import { getLanguage } from "./selector";

export function* getMovieSaga(action: any) {
  yield put(actions.getMovieStart());
  try {
	const language = yield select(getLanguage);
    const res = yield axios.get(`/movie/${action.id}?api_key=${API_KEY}&language=${language}`);
    const { data } = res;
	yield put(
      actions.getMovieSuccess(data)
    );
  } catch (error) {
    yield put(actions.getMovieFail(error));
  }
}