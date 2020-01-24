import { put } from "redux-saga/effects";

import axios from "../../utility/axios";
import { API_KEY } from "../../utility/API_KEY";
import * as actions from "../actions/getMovie";


export function* getMovieSaga(action: any) {
  yield put(actions.getMovieStart());
  try {
	  console.log(action);
    const res = yield axios.get(`/movie/${action.id}?api_key=${API_KEY}`);
    const { data } = res;
	yield put(
      actions.getMovieSuccess(data)
    );
  } catch (error) {
    yield put(actions.getMovieFail(error));
  }
}