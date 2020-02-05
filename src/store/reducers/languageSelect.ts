import actionTypes from '../actions/actionTypes';

const initialState = {
	language: 'en',
}

export default function searchMovies(state = initialState, action: any) {
	switch (action.type) {
		case actionTypes.CHANGE_LANGUAGE:
			return {
				language: action.payload,
			}
		default:
			return state
	}
	
}