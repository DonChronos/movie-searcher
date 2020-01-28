import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
width: 600px;
@media (max-width: 500px) {
	width: 100px
}
`

const search = (props: any) => {
	const { handleQuerySearch, movies } = props;
	const { query } = movies;	
return (
<SearchBar onChange={handleQuerySearch} 
onKeyDown={e => { if (e.keyCode === 13) {
handleQuerySearch(e)
}
}} 
value={query} >
</SearchBar>
)
}
export default search;