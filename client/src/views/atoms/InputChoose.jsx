import React from "react"

export default function InputChoose(props) {
	return (
		<input
			type={props.type}
			value={props.value}
			name={props.inputName}
			className={props.class}
			selected={props.selected ?? true}
		/>
	)
}
