import React from 'react'

const Banner = (props) => {
	return <figure className={`banner  ${props.active}`}
		name={props.name} 
		data-mobile={props.imageMobile}
	>
		<a href={props.url}>
			<img src={props.image} />
			<figcaption>{props.text}</figcaption>
		</a>
	</figure>
}

export default Banner