import React from 'react'

const LinkItem = (props) => {
	return <li key={props.index} className={props.name}>
    <a href={props.url} title={props.text}>{props.text}</a>
  </li>
}

export default LinkItem