import React from "react"

export default function InputText(props) {
	return (
		<input
			type='text'
			value={props.value}
			name={props.name}
			className={props.class}
			onChange={props.onChange}
		/>
	)
}
