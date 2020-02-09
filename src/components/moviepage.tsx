import React, { useEffect } from 'react';
import FavButton from '../containers/FavouriteButton';
import Recommended from '../containers/Recommended';
import styled from 'styled-components';

const MovieCardWrapper = styled.div`
position: relative;
display: flex;
flex-shrink: 0;
width: 355px;
height: 533px;
margin: 0;
background-size: cover;
align-items: center;
&:hover button {
	opacity: 1;
}
@media (max-width: 500px) {
	width: 225px;
	height: 337px;
}
`

const PageWrapper = styled.div`
display: flex;
margin: 0 auto;
margin-top: 30px;
padding: 20px;
box-sizing: border-box;
width: 80%;
flex-direction: row;
background-color: #f2f4f4;
@media (max-width: 950px) {
		flex-direction: column;
		align-items: center;
	}
@media (max-width: 500px) {
		width: 100%;
		padding: 0px;
	}
`

const MoviePage = (props: any) => {
	// url_id for recommended
	let url_id = props.match.params.id
	const { getMovie } = props;
	let { language } = props.languageSelect;
	useEffect(() => {
		getMovie(+url_id);
		window.scrollTo(0, 0)
	}, [url_id, language, getMovie])
	const { movie } = props;
	const { data, isLoading } = movie;
	if (isLoading || data === null) { return <h3>Loading...</h3> };
	const { title, overview, release_date, poster_path, id } = data;
	return (
	<>
	<h1 style={{display: 'block', textAlign: 'center'}}>{title}</h1>
	<PageWrapper>
	<MovieCardWrapper style={{
		backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
		}}
	><FavButton id={id} />
	</MovieCardWrapper>
	
	<p>{overview}</p>
	<p>{release_date}</p>
	</PageWrapper>
	<h2>Recommended</h2>
	<Recommended id={id} />
	</>
	)
}

export default MoviePage;