import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/trendingMovies';
import MovieList from '../components/movielist';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { trendingMovies } = state;
	return {
		movies: trendingMovies,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchTrending: (page: number) => dispatch(actions.fetchTrending(page)),
		newTrendingRequest: () => dispatch(actions.newTrendingRequest()),
	}
}

const Trending = (props: any) => {
	useEffect(() => {
		console.log(props);
		props.fetchTrending(props.movies.currentPage);
		return () => props.newTrendingRequest();
	}, [])
	
	return <MovieList {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);