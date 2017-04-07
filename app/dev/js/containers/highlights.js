import React, {Component} from 'react'
import Banner from './../components/banner'
import Navigator from './../components/navigator'
import {getData} from './../utils/getData'
import {setActive} from './../utils/setActive'
import {passActive} from './../utils/passActive'

const bannerPath = './../static/images/banners/'

export default class Highlights extends Component {
	constructor() {
		super()
		this.state = {
			data: {},
			ready: false,
			activeIndex: 0,
			direction: null
		}
	}

	componentDidMount() {
		getData('highlights.json')
			.then(data => this.setState({ data, ready: true }))
      .catch(error => console.error(`Deu ruim por causa disso: ${error}`)) 
	}

	render () {
		let data = this.state.data
		return (this.state.ready && <section className="highlights">
			<Navigator 
				arrow = {data.nav.arrow}
				leftArrow = {
					passActive.bind(this, (-1), 'left', (data.items.length), this)
				}
				rightArrow = {
					passActive.bind(this, 1, 'right', (data.items.length), this)
				}
				dot = {data.nav.dot}
				dots = {data.items.map((item, index) => {
					return (
						<li  className = {this.state.activeIndex === index ? 'active' : ''} 
							key = {index} 
							onClick={ setActive.bind(this, index, this) } 
						> 
							<a>{index}</a> 
						</li>
					)
				})}
			/>

			<ul className="bannerArea">
				{data.items.map((item, index) => {
					return (
						<li key = {index}>
							<Banner 								
								active={this.state.activeIndex === index ? 'active' : ''} 
								name = {item.name}
								image = {bannerPath + item.image}
								imageMobile = {bannerPath + item.imageMobile}
								url = {item.url}
								text = {item.text}
							/>
						</li>
					)
				})}
			</ul>
		</section>)
	}
}