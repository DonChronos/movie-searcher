import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoading: false,
	data: [],
	totalPages: 0,
	currentPage: 1,
	query: '',
}

export default function searchMovies(state = initialState, action: any) {
	switch (action.type) {
		case actionTypes.NEW_SEARCH_REQUEST:
			return {
				...state,
				currentPage: 1,
				data: []
			}
		case actionTypes.GET_SEARCH_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case actionTypes.GET_SEARCH_SUCCESS:
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
		case actionTypes.CHANGE_SEARCH_QUERY:
		 	return {
				...state,
				query: action.payload,
			}
		default:
			return state
	}
	
}