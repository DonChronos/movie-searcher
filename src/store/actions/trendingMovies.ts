import actionTypes from './actionTypes';

export const fetchTrending = (page: any) => {
	return {
		type: actionTypes.TRENDING_REQUEST,
		page: page,
	}
}
export const fetchTrendingStart = () => {
	return {
		type: actionTypes.GET_TRENDING_REQUEST,
	};
};

export const fetchTrendingFail = (error: any) => {
	return {
		type: actionTypes.GET_ERROR,
		payload: error.message,
	};
};

export const fetchTrendingSuccess = ( totalPages: number, data: any ) => {
  return {
    type: actionTypes.GET_TRENDING_SUCCESS,
	payload: {
		data: data,
		totalPages: totalPages,
	}
  };
};

export const newTrendingRequest = () => {
	return {
		type: actionTypes.NEW_TRENDING_REQUEST,
	}
}