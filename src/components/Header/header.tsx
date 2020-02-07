import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import SearchInput from '../../containers/SearchInput';
import LanguageSelect from '../../containers/LanguageSelect';
import styled from 'styled-components';

const Header = styled.header`
position: sticky;
top: 0;
height: 50px;
width: 100%;
display: flex;
background-color: gray;
justify-content: space-between;
align-items: center;
padding: 0 20px;
box-sizing: border-box;
z-index: 90;
	nav {
	height: 100%;
}
`

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

const header = ( props: any) => (
	            <Header>
				    <Link to="/">
				        <Logo />
					</Link>
					<SearchInput />
                    <nav>
                        <Ul>
                            <Li><NavLink
                                to="/trending"
                                exact
                                activeStyle={{fontWeight: "bold", color: 'black'}}
                                >TRENDING</NavLink></Li>
                            <Li><NavLink
                                to="/favourites"
								activeStyle={{fontWeight: "bold", color: 'black'}}
                                >FAVOURITES</NavLink></Li>
                        </Ul>
                    </nav>
					<LanguageSelect />
                </Header>
)

export default header;