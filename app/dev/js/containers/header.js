import React, {Component} from 'react'
import Menu from './../components/menu'
import Search from './../components/search'
import Countries from './../components/countries'
import LinkItem from './../components/link-item'
import {getData} from './../utils/getData'


export default class Header extends Component {
	constructor() {
		super()
		this.state = {
			data: {},
			ready: false
		}
	}

	componentDidMount() {
		getData('header.json')
			.then(data => this.setState({ data, ready: true }))
      .catch(error => console.error(`Deu ruim por causa disso: ${error}`))
	}

	render () {
		let data = this.state.data
		return (this.state.ready && <header>
			<Menu 
				url = {data.menu.url}
				title = {data.menu.title}
				userName = {`Olá, ${data.menu.userName}`}
			>	
				{data.menu.links.map((link, index) => {
	        return (
	          <LinkItem
	          	key={index}
	          	className= {link.name}
	          	url = {link.url}
	          	text = {link.text}
	          />
	        )
	      })}
			</Menu>

			<Countries
				phone = {data.countries.links[0].phone}
			>
				{data.countries.links.map((link, index) => {
	        return (
	          <LinkItem
	          	key={index}
	          	className= {link.name}
	          	url = {link.url}
	          	text = {link.text}
	          />
	        )
	      })}
			</Countries>	

			<Search
				placeholder = {data.search.placeholder}
				find = {data.search.find}
			/>
		</header>)
	}
}