import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/getMovie';
import MoviePage from '../components/moviepage';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { getMovieDetails, languageSelect } = state;
	return {
		movie: getMovieDetails,
		languageSelect
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		getMovie: (id: any) => dispatch(actions.getMovie(id)),
	}
}

const Movie = (props: any) => {
	return <MoviePage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);