import React, { useEffect } from 'react';
import styled from 'styled-components';

const MovieCardWrapper = styled.div`
position: relative;
display: flex;
width: 355px;
height: 533px;
margin: 0;
background-size: cover;
@media (max-width: 500px) {
	width: 225px;
	height: 337px;
}
`

const MoviePage = (props: any) => {
	useEffect(() => {
		props.getMovie(+props.match.params.id);
		window.scrollTo(0, 0)
	}, [props.match.params.id])
	const { movie } = props;
	const { data, isLoading } = movie;
	if (isLoading || data === null) { return <h3>Loading...</h3> };
	const { title, overview, genres, release_date, poster_path, id } = data;
	return (
	<div>
	<MovieCardWrapper style={{
		backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
		}}
	>
	</MovieCardWrapper>
	<p>{title}</p>
	<p>{overview}</p>
	<p>{release_date}</p>
	</div>
	)
}

export default MoviePage;