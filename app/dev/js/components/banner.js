import React from 'react'

const Banner = (props) => {
	return <figure className={`banner  ${props.active}`}
		name={props.name} 
	>
		<a href={props.url}>
			<img src={props.image} />
			<img src={props.imageMobile} />
			<figcaption>{props.text}</figcaption>
		</a>
	</figure>
}

export default Banner