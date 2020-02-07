import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/languageSelect';
import Select from '../components/Header/languageselect/languageselect';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { languageSelect } = state;
	return {
		reducer: languageSelect,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		changeLanguage: (language: string) => dispatch(actions.changeLanguage(language)),
	}
}

const LanguageSelect = (props: any) => {
	return <Select {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);