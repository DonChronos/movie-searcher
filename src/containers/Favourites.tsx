import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/favouriteMovies';
import MovieList from '../components/movielist';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { favouriteMovies, languageSelect } = state;
	return {
		movies: favouriteMovies,
		languageSelect,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchFavourite: (id: any) => dispatch(actions.fetchFavourite(id)),
		clearFavs: () => dispatch(actions.clearFavs()),
	}
}

const Favourites = (props: any) => {
	const { language } = props.languageSelect;
    const { fetchFavourite, clearFavs } = props;	
	useEffect(() => {
		Object.keys(localStorage).forEach((id: any) => {
		fetchFavourite(localStorage.getItem(id))
	})
		return () => clearFavs();
	}, [language, fetchFavourite, clearFavs])
	
	return <MovieList {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);