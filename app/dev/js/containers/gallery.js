import React, {Component} from 'react'
import Product from './../components/product'
import Navigator from './../components/navigator'
import {getData} from './../utils/getData'
import {setActive} from './../utils/setActive'
import {passActive} from './../utils/passActive'

const productPath = './../static/images/products/'

export default class Gallery extends Component {
	constructor() {
		super()
		this.state = {
			data: {},
			ready: false,
			activeIndex: null,
			direction: null,
			bigImage: null,

			disable: 'left',
			itemSize: 25,
			listMargin: 0,
			sizeOperator: '%',
			lastDirection: null,
			counter: 0
		}
	}

	passItems(element, direction, quant) {
		let state = element.state
		let operator = 0
		let refSize = state.itemSize
		let itens = (100 / state.itemSize)
		let max = quant - itens
		console.log(direction)		
		console.log(max)

		direction === 'left' ? refSize = `${refSize}` : refSize = `-${refSize}`
		direction === 'right' ? operator = -1 : operator = 1

		state.counter <= -1 && direction != 'right' || state.counter >= ((max - 1) * -1) && direction != 'left' ? element.setState({
			listMargin: (state.listMargin) + (refSize) / 1.0,
			counter: (state.counter) + (operator) / 1.0,
			lastDirection: direction,
			disable: ''
		}) : element.setState({
			disable: direction
		})

	
		
		console.log('margin: %', state.listMargin)
		console.log(state.counter)
	}

	componentDidMount() {
		getData('gallery.json')
			.then(data => this.setState({ data, ready: true }))
      .catch(error => console.error(`Deu ruim por causa disso: ${error}`))
	}

	render () {
		let data = this.state.data
		return (this.state.ready &&  <section className="gallery">
			<Navigator
				newClass = {`products ${this.state.disable ? this.state.disable : ''}`}
				arrow = {data.nav.arrow}
				leftArrow = {	this.passItems.bind(this, this, 'left', data.items.length)	}
				rightArrow = { this.passItems.bind(this, this, 'right', data.items.length)	}
			/>
				<ul className="productArea"  style={{marginLeft: this.state.listMargin + this.state.sizeOperator}}>
					{data.items.map((item, index) => {
						return (
							<li key = {index}>
								<Product 								
									active = {this.state.activeIndex === index ? 'active' : ''} 
									title = {item.title}

									price = {item.price}
									priceOld = {item.priceOld}
									priceXTimes = {item.priceX.times}
									priceXValue = {item.priceX.value}
									discount = {item.discount}
									rate = {item.rate}

									imageDefault = {productPath + item.image.default}
									imageHover = {productPath + item.image.hover}
									imageZoom = {productPath + item.image.zoom}

									openImage = {setActive.bind(this, index, this)}
									closeImage = {setActive.bind(this, null, this)}

									url = {item.url}
									currency = {this.state.data.currency}
								/>
							</li>
						)
					})}
				</ul>
		</section>)
	}
}