import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoading: false,
	data: [],
	totalPages: 0,
	currentPage: 1,
}

export default function trendingMovies(state = initialState, action: any) {
	switch (action.type) {
		case actionTypes.NEW_TRENDING_REQUEST:
			return {
				...state,
				currentPage: 1,
				data: []
			}
		case actionTypes.GET_TRENDING_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case actionTypes.GET_TRENDING_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [...state.data, ...action.payload.data],
				totalPages: action.payload.totalPages,
				currentPage: state.currentPage + 1,
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