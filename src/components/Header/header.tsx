import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import SearchBar from './search';
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
`

const Li = styled.li`
margin: 10px;
`

const header = ( props: any) => (
	            <Header>
				    <Link to="/">
				        <Logo />
					</Link>
					<SearchBar />
                    <nav>
                        <Ul>
                            <Li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                >HOME</NavLink></Li>
                            <Li><NavLink
                                to="/favourites"
								activeClassName="my-active"
                                >FAVOURTIES</NavLink></Li>
                        </Ul>
                    </nav>
                </Header>
)

export default header;