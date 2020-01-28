import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoading: false,
	data: [],
	totalPages: -1,
	currentPage: 1,
}

export default function moviesFavorite(state = initialState, action: any) {
	switch (action.type) {
		case actionTypes.GET_FAV_MOVIE_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case actionTypes.GET_FAV_MOVIE_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [...state.data, action.payload],
			}
		case actionTypes.GET_ERROR:
			return {
				...state,
				isLoading: false,
			}
		case actionTypes.CLEAR_FAVS:
			return {
				...state,
				data: [],
			}
		default:
			return state
	}
}