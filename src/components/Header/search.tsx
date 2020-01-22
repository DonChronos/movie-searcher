import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
width: 600px;
@media (max-width: 500px) {
	width: 100px
}
`

const search = (props: any) => {
return (
<SearchBar >
</SearchBar>
)
}
export default search;