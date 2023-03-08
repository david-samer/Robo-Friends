import React from 'react';

const Scroller = (props) =>
{
	return(
		<div style={{overflowY:'scroll',  height:'500px' ,border:'3px solid black'}}>
			{props.children}
		</div>
	);
}

export default Scroller