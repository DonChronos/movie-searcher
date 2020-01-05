import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import SearchBar from './search';

const header = ( props: any) => (
	            <header>
				    <Link to="/">
				        <Logo />
					</Link>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                >Home</NavLink></li>
                            <li><NavLink
                                to="/favourites"
								activeClassName="my-active"
                                >Favourites</NavLink></li>
                        </ul>
                    </nav>
					<SearchBar />
                </header>
)

export default header;