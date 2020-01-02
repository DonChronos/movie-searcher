import { actionTypes } from './actionTypes';

export const fetchTrendingMovies = ( totalPages, data ) => {
  return {
    type: actionTypes.GET_BEST_SUCCESS
	payload: {
		data: data,
		totalPages: totalPages,
	}
  };
};