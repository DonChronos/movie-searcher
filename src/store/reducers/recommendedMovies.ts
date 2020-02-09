import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoading: false,
	data: [],
	totalPages: 0,
	currentPage: 1,
}

export default function recommendedMovies(state = initialState, action: any) {
	switch (action.type) {
		case actionTypes.NEW_RECOMMENDED_REQUEST:
			return {
				...state,
				data: []
			}
		case actionTypes.GET_RECOMMENDED_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case actionTypes.GET_RECOMMENDED_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [...action.data],
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