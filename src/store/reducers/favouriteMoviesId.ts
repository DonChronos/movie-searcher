import actionTypes from '../actions/actionTypes';

const initialState = {
	data: [],
}

export default function favoriteIds(state = initialState, action: any) {
	switch (action.type) {
		case actionTypes.ADD_FAV_SUCCESS:
			return {
				data: [...state.data, action.payload],
			}
		case actionTypes.DEL_FAV_SUCCESS:
			return {
				data: state.data.filter(fav => fav !== action.payload),
			}
		default:
			return state
	}
}