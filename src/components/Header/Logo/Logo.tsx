import React from 'react';

import movieLogo from './logo.png';
import styled from 'styled-components';

const Logo = styled.div`
background-color: white;
padding: 8px;
height: 100%;
box-sizing: border-box;
border-radius: 5px;
img {
	height: 100%;
}
`

const logo = (props: any) => (
<Logo>
<img src={movieLogo} alt="Movie" />
</Logo>
)

export default logo;