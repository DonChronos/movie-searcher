import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/searchMovies';
import MovieList from '../components/movielist';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { searchMovies, languageSelect } = state;
	return {
		movies: searchMovies,
		languageSelect,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchData: (page: number, query: string) => dispatch(actions.fetchSearch(page, query)),
		newSearchRequest: () => dispatch(actions.newSearchRequest()),
	}
}

const Search= (props: any) => {
	const [language, changeLanguage] = useState(props.languageSelect.language);
	if (props.match.path === '/search' && language !== props.languageSelect.language) {
		changeLanguage(props.languageSelect.language);
		props.newSearchRequest();
		props.fetchData(1, props.movies.query);
	}
	return <MovieList {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);