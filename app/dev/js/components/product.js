import React from 'react'

const Product = (props) => {
	return <figure className={`product  ${props.active}`}>
		<div className="photos" onClick={props.openImage}>
			<img src={props.imageDefault} />
			<img src={props.imageHover} />
		</div>

		<aside className="bigPhoto">
			<img src={props.imageZoom} />
			<button type="button" onClick={props.closeImage}>
				<span>Fechar</span>
			</button>
		</aside>

		<figcaption>
			<h2 className="title">{props.title}</h2>
			
			<div className="rate" data-rate={props.rate}>
				{props.rate}
			</div>

			<div className="prices">
				{props.priceOld ? <span className="oldPrice">
					De: {props.currency} {props.priceOld}
				</span> : null} 
				<p className="price">
					Por: <span>{props.currency} {props.price}</span> 
				</p>
				<p className="priceX">
					ou 
					<span> até  {props.priceXTimes}X </span>
					 de <span> {props.currency} {props.priceXValue}</span>
				</p>
			</div>
			<a className="buy" href={props.url} onClick={props.openImage}>
				Comprar
			</a>
			<p className="discount">
				Economize: {props.currency} {props.discount}
			</p>
		</figcaption>
	</figure>
}

export default Product