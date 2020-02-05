import { put, call, select } from "redux-saga/effects";

import axios from "../../utility/axios";
import { API_KEY } from "../../utility/API_KEY";
import * as actions from "../actions/favouriteMovies";
import { getLanguage } from "./selector";

export function* fetchFavouriteSaga(action: any) {
  yield put(actions.fetchFavouriteStart());
  try {
	const language = yield select(getLanguage);
    const res = yield axios.get(`/movie/${action.id}?api_key=${API_KEY}&language=${language}`);
    const { data } = res;
	const { id, overview, title, poster_path: posterUrl } = data
	const movieCardData = { id, overview, title, posterUrl }
	yield put(
      actions.fetchFavouriteSuccess(movieCardData)
    );
  } catch (error) {
    yield put(actions.fetchFavouriteFail(error));
  }
}

export function* saveFavouriteSaga(action: any) {
	try {
		yield localStorage.setItem(`id${action.id}`, action.id);
		yield put(
      actions.addFavSuccess(action.id)
    );
	} catch (error) {
		yield put(actions.fetchFavouriteFail(error))
	}
}

export function* removeFavouriteSaga(action: any) {
	try {
		yield call([localStorage, "removeItem"], `id${action.id}`)
		yield put(
      actions.delFavSuccess(action.id)
    );
	} catch (error) {
		yield put(actions.fetchFavouriteFail(error))
	}
}