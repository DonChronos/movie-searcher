import React from 'react';

import movieLogo from './logo.png';
import styled from 'styled-components';

const Logo = styled.div`
height: 50px;
width: 50px;
img {
	height: 100%;
}
@media (max-width: 500px) {
	display: none;
}
`

const logo = (props: any) => (
<Logo>
<img src={movieLogo} alt="Movie" />
</Logo>
)

export default logo;