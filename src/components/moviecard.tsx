import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
`


const Movie = (props: any) => {
	const { movie } = props;
	if (movie === undefined) {
		return (
			<StyledLink to={'/'}>
				<MovieCardWrapper>
					<h3>Loading...</h3>
				</MovieCardWrapper>
			</StyledLink>
		)
	}
	const { id, title, posterUrl } = movie;
	return (
	<StyledLink to={`/movie/${id}`}>
	<MovieCardWrapper style={{
		backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterUrl})`,
		}}
	>
	</MovieCardWrapper>
	</StyledLink>
	)
}

export default Movie;