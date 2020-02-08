import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import SearchInput from '../../containers/SearchInput';
import LanguageSelect from '../../containers/LanguageSelect';
import NavLinks from '../../containers/NavLinks';
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

const header = ( props: any) => (
	            <Header>
				    <Link to="/">
				        <Logo />
					</Link>
					<SearchInput />
                    <NavLinks />
					<LanguageSelect />
                </Header>
)

export default header;