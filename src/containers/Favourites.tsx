import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/favouriteMovies';
import MovieList from '../components/movielist';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { favouriteMovies, favouriteMoviesId } = state;
	return {
		movies: favouriteMovies,
		ids: favouriteMoviesId,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchFavourite: (id: any) => dispatch(actions.fetchFavourite(id)),
		clearFavs: () => dispatch(actions.clearFavs()),
	}
}

const Favourites = (props: any) => {
	useEffect(() => {
		Object.keys(localStorage).forEach((id: any) => {
		props.fetchFavourite(localStorage.getItem(id))
	})
		return () => props.clearFavs();
	}, [])
	
	return <MovieList {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);