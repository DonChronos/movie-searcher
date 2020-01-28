import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/searchMovies';
import MovieList from '../components/movielist';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { searchMovies } = state;
	return {
		movies: searchMovies,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchData: (page: number, query: string) => dispatch(actions.fetchSearch(page, query)),
	}
}

const Search= (props: any) => {
	return <MovieList {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);