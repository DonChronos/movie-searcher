import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import MovieCard from './moviecard';
import styled from 'styled-components';

const MoviesWrapper = styled.ul`
list-style: none;
margin: auto;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(355px, 1fr));
grid-gap: 20px;
align-items: center;
padding: 25px 0;
@media (max-width: 500px) {
	grid-template-columns: 1fr;
}
`
const MovieList = (props: any) => {
	const { fetchTrending, movies } = props;
	const { data, isLoading, currentPage, totalPages } = movies;
	const movieCards = data.map((movie: any) => (
		<li key={movie.id}>
			<MovieCard movie={movie} />
		</li>
	));
	return (
		<InfiniteScroll
			pageStart={0}
			loadMore={() => fetchTrending(currentPage)}
			hasMore={isLoading ? false : currentPage <= totalPages}
			loader={<h3 key={currentPage}>Loading...</h3>}
			initialLoad={false}
		>
			<MoviesWrapper>{isLoading ? [...movieCards, <h3>Loading...</h3>] : movieCards}</MoviesWrapper>
		</InfiniteScroll>
	)
}

export default MovieList;