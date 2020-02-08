import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
width: 100%;
height: 10%;
opacity: 0;
`

const FavButton = (props: any) => {
	const { addFav, delFav, id, languageSelect } = props;
	const { language } = languageSelect;
	const translation: {[index: string]:any}  = {
		en: ['Remove from favourites', 'Add to favourites'],
		ru: ['Удалить из избранных', 'Добавить в избранные'],
		es: ['Eliminar de favoritos','Añadir a favoritos'], 
		pt: ['Remover dos favoritos', 'Adicionar aos favoritos'],
	}
	console.log(translation[language]);
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
		<Button onClick={clickDelFav}>{translation[language][0]}</Button>
	) : (
		<Button onClick={clickAddFav}>{translation[language][1]}</Button>
	)}
	</>
	)
}

export default FavButton;