import React from "react"
import { InputChoose, InputSelect, InputText, Label } from "../atoms"

export default function Input(props) {
	let inputs
	const type = props.type

	if (type === "text")
		inputs = (
			<InputText
				value={props.inputValue}
				name={props.inputName}
				class={props.inputClass}
				onChange={props.inputChange}
			/>
		)
	if (type === "checkbox" || type === "radio")
		inputs = (
			<InputChoose
				value={props.inputValue}
				name={props.inputName}
				class={props.inputClass}
				onChange={props.inputChange}
			/>
		)
	if (type === "select") inputs = <InputSelect />

	return (
		<>
			<Label
				class={props.labelClass}
				for={props.inputName}
				label={props.labelName}
			/>
			{inputs}
		</>
	)
}
