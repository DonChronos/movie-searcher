import React, { useState } from 'react';
import flags from './flags.png';
import styled from 'styled-components';

const Flag = styled.button`
width: 24px;
height: 24px;
border: none;
background: url(${flags}) no-repeat;
`

const DropDown = styled.div`
display: inline-block;
position: relative;
`

const Languageselect = (props: any) => {
const [isOpen, setOpen] = useState(false);
const handleOpen = () => {
	setOpen(!isOpen);
}
const { changeLanguage, reducer } = props;
const { language } = reducer;
const list = ['en', 'ru', 'es', 'pt'];
let content = list.map(e => (e === language) ? null : 
<Flag onClick={() => changeLanguage(e)} style={{backgroundPosition: (e === 'en') ? '-288px -96px' :
(e === 'ru') ? '-216px -264px' : (e === 'es') ? '-48px -96px' :
(e === 'pt') ? '-72px -264px' : undefined}} />);
return (
<div>
<Flag style={{backgroundPosition: (language === 'en') ? '-288px -96px' :
(language === 'ru') ? '-216px -264px' : (language === 'es') ? '-48px -96px' :
(language === 'pt') ? '-72px -264px' : undefined}} onClick={handleOpen} />
<div style={{position: 'absolute', display: isOpen ? 'block' : 'none'}}>
{content}
</div>
</div>
)
}

export default Languageselect;