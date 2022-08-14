import React from 'react'
import {
  InputChoose,
  InputPhone,
  InputSelect,
  InputText,
  Label,
} from '../atoms/Atoms'

export default function Input(props) {
  let inputs
  const type = props.type

  if (type === 'text' || type === 'password')
    inputs = (
      <InputText
        value={props.inputValue}
        name={props.inputName}
        class={props.inputClass}
        onChange={props.inputChange}
      />
    )
  if (type === 'checkbox' || type === 'radio')
    inputs = (
      <InputChoose
        value={props.inputValue}
        name={props.inputName}
        class={props.inputClass}
        onChange={props.inputChange}
      />
    )
  if (type === 'select') inputs = <InputSelect />
  if (type === 'phone') inputs = <InputPhone />

  return (
    <>
      <Label
        class={props.labelClass}
        for={props.inputName}
        label={props.labelName}
      >
        {inputs}
      </Label>
    </>
  )
}
