import React from 'react';
import { connect } from 'react-redux';
import Navlinks from '../components/Header/navlinks';

const mapStateToProps = (state: any) => {
	const { languageSelect } = state;
	return {
		languageSelect,
	}
}

const NavLinks = (props: any) => {
	return <Navlinks {...props} />;
};

export default connect(mapStateToProps)(NavLinks);