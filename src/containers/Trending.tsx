import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/trendingMovies';
import MovieList from '../components/movielist';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { trendingMovies, languageSelect } = state;
	return {
		movies: trendingMovies,
		languageSelect
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchData: (page: number) => dispatch(actions.fetchTrending(page)),
		newTrendingRequest: () => dispatch(actions.newTrendingRequest()),
	}
}

const Trending = (props: any) => {
	const { language } = props.languageSelect;
    const { fetchData, newTrendingRequest } = props;	
	useEffect(() => {
		fetchData(1);
		return () => {
			newTrendingRequest();
		}
	}, [language, fetchData, newTrendingRequest]);
	return <MovieList {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);