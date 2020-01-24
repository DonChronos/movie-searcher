import actionTypes from './actionTypes';

export const getMovie = (id: any) => {
	return {
		type: actionTypes.MOVIE_REQUEST,
		id: id,
	}
}

export const getMovieStart = () => {
	return {
		type: actionTypes.GET_MOVIE_REQUEST,
	};
};

export const getMovieSuccess = (data: any) => {
  return {
    type: actionTypes.GET_MOVIE_SUCCESS,
	payload: data,
  };
};


export const getMovieFail = (error: any) => {
	return {
		type: actionTypes.GET_ERROR,
		payload: error.message,
	};
};