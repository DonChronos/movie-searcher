import actionTypes from './actionTypes';

export const fetchRecommended = (id: number) => {
	return {
		type: actionTypes.RECOMMENDED_REQUEST,
		id,
	}
}

export const fetchRecommendedStart = () => {
	return {
		type: actionTypes.GET_RECOMMENDED_REQUEST,
	};
};

export const fetchRecommendedFail = (error: any) => {
	return {
		type: actionTypes.GET_ERROR,
		payload: error.message,
	};
};

export const fetchRecommendedSuccess = (data: any) => {
  return {
    type: actionTypes.GET_RECOMMENDED_SUCCESS,
	data: data,
  };
};

export const newRecommendedRequest = () => {
	return {
		type: actionTypes.NEW_RECOMMENDED_REQUEST,
	}
}