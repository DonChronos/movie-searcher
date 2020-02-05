import actionTypes from './actionTypes';

export const changeLanguage = (language: string) => {
	return {
		type: actionTypes.CHANGE_LANGUAGE,
		payload: language,
	}
}