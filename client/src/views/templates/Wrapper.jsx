import React from "react"
import { Header } from "../organisms/components/Components"

export default function Wrapper(props) {
	return (
		<>
			<Header />
			<main className={props.class}>{props.children}</main>
			<footer></footer>
		</>
	)
}
