import React from 'react'

const Search = (props) => {
	return <form className="search">
		<input type="search" placeholder={props.placeholder}/>
		<button type="button">{props.find}</button>
	</form>
}

export default Search