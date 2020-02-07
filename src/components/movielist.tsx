import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
	const { fetchData, movies } = props;
	const { data, isLoading, currentPage, totalPages } = movies;
	
	const movieCards = data.map((movie: any) => (
		<li key={movie.id}>
			<MovieCard movie={movie} />
		</li>
	));
	if (movies.query) {
		const { query } = movies;
		return (
		<InfiniteScroll
			dataLength={movieCards.length}
			next={() => fetchData(currentPage, query)}
			hasMore={isLoading ? false : currentPage <= totalPages}
			loader={<h3 style={{display: 'inline-block', height: '1100px'}} key={currentPage}>Loading...</h3>}
		>
			<MoviesWrapper>{isLoading ? [...movieCards, <h3 key={currentPage+100}>Loading...</h3>] : movieCards}</MoviesWrapper>
		</InfiniteScroll>
	)
	}
	return (
		<InfiniteScroll
			dataLength={movieCards.length}
			next={() => fetchData(currentPage)}
			hasMore={isLoading ? false : currentPage <= totalPages}
			loader={<h3 style={{display: 'inline-block', height: '1100px'}} key={currentPage}>Loading...</h3>}
		>
			<MoviesWrapper>{isLoading ? [...movieCards, <h3 key={currentPage+100}>Loading...</h3>] : movieCards}</MoviesWrapper>
		</InfiniteScroll>
	)
}

export default MovieList;