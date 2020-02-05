import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../store/actions/searchMovies';
import Search from '../components/Header/search';

declare var dispatch: any;

const mapStateToProps = (state: any) => {
	const { searchMovies } = state;
	return {
		movies: searchMovies,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		fetchSearch: (page: number, query: string) => dispatch(actions.fetchSearch(page, query)),
		newSearchRequest: () => dispatch(actions.newSearchRequest()),
		changeSearchQuery: (query: string) => dispatch(actions.changeSearchQuery(query)),
	}
}

const SearchInput = (props: any) => {
	const { isLoading, query } = props.movies;
	const startSearch = async (value: any) => {
		if (window.location.pathname !== '/search') {
			props.history.push('/search')
		}
		await (props.newSearchRequest())
		window.scrollTo(0,0)
		await (props.fetchSearch(1, value.target.value))
	}
	const QuerySearch = async (e: any) => {
		e.persist();
		await (props.changeSearchQuery(e.target.value));
	}
	
	let timer = useRef(0);
	
	function DelayWrapper (dispatchFn: any) {
		const StartTimer = (value: any) => {
			timer.current = setTimeout(async () => {
				await startSearch(value);
				clearTimeout(timer.current)
			}, 1500)
		}
		return async (value: any) => {
			await dispatchFn(value);
			clearTimeout(timer.current);
			StartTimer(value);
			if (isLoading) {
				StartTimer(value);
			}
		}
	}
	
	const handleQuerySearch = DelayWrapper(QuerySearch);
	return <Search {...{...props, handleQuerySearch}} />;
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchInput));