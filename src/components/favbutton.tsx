import React from 'react';

const FavButton = (props: any) => {
	const { addFav, delFav, ids, id } = props;
	const isFavorite = ids.data.includes(id)
	const clickAddFav = () => {
		addFav(id);
	}
	const clickDelFav = () => {
		delFav(id);
	}
	return (
	<>
	{isFavorite ? (
		<button onClick={clickDelFav}>Remove favorite</button>
	) : (
		<button onClick={clickAddFav}>Add to favorite</button>
	)}
	</>
	)
}

export default FavButton;