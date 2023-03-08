import React from 'react';
import 'tachyons';

const searchBox = ({SearchBox , searchChange}) => {
	return <input type='search' className='tc pa3 ba b--green b-lightest-blue' placeholder="Robo Name" 
	onChange= {searchChange} />
}

export default searchBox;
