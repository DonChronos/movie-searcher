import React, { useEffect } from 'react';
import MovieCard from './moviecard';
import styled from 'styled-components';

const MoviesWrapper = styled.ul`
list-style: none;
margin: auto;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
grid-gap: 20px;
align-items: center;
padding: 25px 0;
@media (max-width: 500px) {
	grid-template-columns: 1fr;
}
`
const MovieList = (props: any) => {
	const { language } = props.languageSelect;
    const { fetchData, newRecommendedRequest, id } = props;	
	useEffect(() => {
		fetchData(id);
		return () => {
			newRecommendedRequest();
		}
	}, [language, id, fetchData, newRecommendedRequest]);
	const { data, isLoading } = props.movies;
	const movieCards = data.map((movie: any, index: any) => {
		if (index >= 3) return null;
		return (
		<li key={movie.id}>
			<MovieCard movie={movie} />
		</li>
	)});

	return (
			<MoviesWrapper>{isLoading ? <h3 key={1}>Loading...</h3> : movieCards}</MoviesWrapper>
	)
}

export default MovieList;