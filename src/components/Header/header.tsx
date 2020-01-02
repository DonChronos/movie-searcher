import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'Logo/Logo';

const header = ( props: any) => (
	            <header>
				    <Logo />
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
                </header>
)

export default header;