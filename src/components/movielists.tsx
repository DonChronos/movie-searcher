import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const MovieList = (props: any) => {
	const MovieCards;
	
	return {
		<InfiniteScroll
		pageStart={0}
		loadMore={}
		hasMore={isLoading ? false : currentPage <= totalPages}
		loader={<div key={0}>Loading...</div>}
		initialLoad={false}
		>
		{isLoading ? [...MovieCards, ...Preloader] : MovieCards}
		</InfiniteScroll>
	}
}

export default MovieList;