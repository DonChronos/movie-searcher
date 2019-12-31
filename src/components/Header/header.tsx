import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'Logo/Logo';

const navigationItem = ( props: any ) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

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