import React from 'react'

const Countries = (props) => {
	return <nav className="countries">
		<ul>
			{props.children}
		</ul>
		<h2>
			<a href={'tel:' + props.phone} title={`telefone: ${props.phone}`}>{props.phone}</a>
		</h2>
	</nav>
}

export default Countries