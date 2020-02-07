import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/favouriteMovies';
import FavButton from '../components/favbutton';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { favouriteMoviesId } = state;
	return {
		ids: favouriteMoviesId,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		addFav: (id: any) => dispatch(actions.addFav(id)),
		delFav: (id: any) => dispatch(actions.delFav(id)),
	}
}

const FavouriteButton = (props: any) => {
	return <FavButton {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteButton);