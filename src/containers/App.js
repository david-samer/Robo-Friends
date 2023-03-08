import React , {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/searchBox';
import Scroller from '../components/Scroller'; 



class App extends Component{
	constructor()
	{
		super ()
		this.state = {
			robots : [],
			SearchBox : ''
		}
	}

	onSearchChange = (event) => {
		this.setState({SearchBox: event.target.value})
		console.log(event.target.value)
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(users => this.setState({robots:users}))
	}

	


	render()
	{
		const filterBots = this.state.robots.filter(bots => {
				return bots.name.toLowerCase().includes(this.state.SearchBox.toLowerCase())
			}) 
		return (
			<div className= 'tc'>
				<h1> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroller>
					<CardList robots = {filterBots}/>
				</Scroller>
			</div>
		);
	}
}


export default App;