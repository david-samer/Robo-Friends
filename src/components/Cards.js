import React from 'react';
import 'tachyons';


const cards = (props) =>{
	const {name, email , id} = props;
	return (
		<div className= " br3 dib pa3 ma2 bg-light-green grow" >
			<img alt="robot" src={`https://robohash.org/${id}.png`}/>
			<h1>{name}</h1>
			<h2>{email}</h2>
		</div>
		);
}

export default cards;