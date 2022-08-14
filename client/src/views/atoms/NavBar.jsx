import React from "react"
import "./styles/navbar.scss"

export default function NavBar(props) {
	return <nav className='navbar'>{props.children}</nav>
}
