import React from 'react'

const Menu = (props) => {
	return <nav className="menu">
		<h1>
			<a href={props.url} title={props.title}>{props.title}</a>
		</h1>
		<ul name={props.userName}>
			{props.children}
		</ul>
	</nav>
}

export default Menu

