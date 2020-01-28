import actionTypes from './actionTypes';

export const addFav = (id: any) => {
	console.log(id);
	return {
		type: actionTypes.ADD_FAV_ID,
		id: id,
	}
}

export const delFav = (id: any) => {
	return {
		type: actionTypes.DEL_FAV_ID,
		id: id,
	}
}

export const addFavSuccess = (id: any) => {
	return {
		type: actionTypes.ADD_FAV_SUCCESS,
		payload: id,
	}
}

export const delFavSuccess = (id: any) => {
	return {
		type: actionTypes.DEL_FAV_SUCCESS,
		payload: id,
	}
}

export const clearFavs = () => {
	return {
		type: actionTypes.CLEAR_FAVS,
	}
}

export const fetchFavourite = (id: any) => {
	return {
		type: actionTypes.FAV_MOVIE_REQUEST,
		id: id,
	};
};

export const fetchFavouriteStart = () => {
	return {
		type: actionTypes.GET_FAV_MOVIE_REQUEST,
	};
};

export const fetchFavouriteFail = (error: any) => {
	return {
		type: actionTypes.GET_ERROR,
		payload: error.message,
	};
};

export const fetchFavouriteSuccess = (movieCardData: any) => {
  return {
    type: actionTypes.GET_FAV_MOVIE_SUCCESS,
	payload: movieCardData,
  };
};