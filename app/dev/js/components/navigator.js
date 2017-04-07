import React from 'react'

const Navigator = (props) => {
	return <nav className={`navigator ${props.newClass}`}>
		{props.arrow && <div className="arrows">
			<button type="button" onClick={props.leftArrow}>Anterior</button>
			<button type="button" onClick={props.rightArrow}>Próximo</button>
		</div>}
		{props.dot && <ol className="dots">{props.dots}</ol>}
	</nav>
}

export default Navigator