import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
align-items: center;
height: 100%;
flex-flow: row;
justify-content: space-around;
background-color: white;
@media (max-width: 800px) {
justify-content: space-between;
}
@media (max-width: 400px) {
	flex-wrap: wrap;
	align-content: center;
}
`

const Li = styled.li`
margin: 10px;
text-decoration: none;
@media (max-width: 400px) {
	font-size: 12px;
}
`

const navlinks = (props: any) => {
	const { language } = props.languageSelect;
	const translation: {[index: string]:any}  = {
		en: ['TRENDING', 'FAVOURITES'],
		ru: ['ПОПУЛЯРНЫЕ', 'ИЗБРАННЫЕ'],
		es: ['TENDENCIAS','FAVORITOS'], 
		pt: ['TENDÊNCIAS', 'FAVORITOS'],
	}
	return (
	<nav>
        <Ul>
            <Li><NavLink
                to="/trending"
                exact
                activeStyle={{fontWeight: "bold", color: 'black'}}
                >{translation[language][0]}</NavLink></Li>
            <Li><NavLink
                to="/favourites"
				activeStyle={{fontWeight: "bold", color: 'black'}}
                >{translation[language][1]}</NavLink></Li>
        </Ul>
    </nav>
	)
}

export default navlinks;