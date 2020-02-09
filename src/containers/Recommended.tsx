import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/recommendedMovies';
import Recommended from '../components/recommended';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { recommendedMovies, languageSelect } = state;
	return {
		movies: recommendedMovies,
		languageSelect
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchData: (id: number) => dispatch(actions.fetchRecommended(id)),
		newRecommendedRequest: () => dispatch(actions.newRecommendedRequest()),
	}
}

const RecommendedPage = (props: any) => {
	return <Recommended {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedPage);