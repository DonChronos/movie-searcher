import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoading: true,
	data: null,
	isFavorite: false,
}


export default function movie(state = initialState, action: any) {
	switch (action.type) {
		case actionTypes.GET_MOVIE_REQUEST:
			return {
				...state,
				isLoading: true,
				isFavorite: false,
			}
		case actionTypes.GET_MOVIE_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload,
			}
		case actionTypes.GET_ERROR:
			return {
				...state,
				isLoading: false,
			}
		default:
			return state
	}
}