import React from "react"

export default function Label(props) {
	return (
		<label htmlFor={props.inputName} className={props.class}>
			{props.label}
		</label>
	)
}
