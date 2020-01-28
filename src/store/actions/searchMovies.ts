import actionTypes from './actionTypes';

export const changeSearchQuery = (query: string) => {
	return {
		type: actionTypes.CHANGE_SEARCH_QUERY,
		payload: query,
	}
}

export const fetchSearch = (page: any, query: string) => {
	return {
		type: actionTypes.SEARCH_REQUEST,
		page: page,
		query: query,
	}
}

export const fetchSearchStart = () => {
	return {
		type: actionTypes.GET_SEARCH_REQUEST,
	};
};

export const fetchSearchFail = (error: any) => {
	return {
		type: actionTypes.GET_ERROR,
		payload: error.message,
	};
};

export const fetchSearchSuccess = ( totalPages: number, data: any ) => {
  return {
    type: actionTypes.GET_SEARCH_SUCCESS,
	payload: {
		data: data,
		totalPages: totalPages,
	}
  };
};

export const newSearchRequest = () => {
	return {
		type: actionTypes.NEW_SEARCH_REQUEST,
	}
}