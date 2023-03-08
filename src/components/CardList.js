import React from 'react'
import Cards from './Cards'

const CardList = ({robots}) =>{
	return(
		<div>
			{
				robots.map((user,i)=>{
					return (<Cards key={user.id} name={user.name} email={user.email} id={user.id}/>);
				})
			}

		</div>
		);
}

export default CardList;