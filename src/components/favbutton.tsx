import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: 100%;
height: 10%;
opacity: 0;
`

const FavButton = (props: any) => {
	const { addFav, delFav, ids, id } = props;
	const isFavourite = localStorage.getItem(`id${id}`);
	const clickAddFav = () => {
		addFav(id);
	}
	const clickDelFav = () => {
		delFav(id);
	}
	return (
	<>
	{isFavourite ? (
		<Button onClick={clickDelFav}>Remove from favourites</Button>
	) : (
		<Button onClick={clickAddFav}>Add to favourites</Button>
	)}
	</>
	)
}

export default FavButton;