import React from "react"
import Wrapper from "../templates/Templates"
import { SignIn, SignUp } from "../organisms/forms/Forms"
import "./styles/authentication.scss"

export default function Authentication(props) {
	return (
		<Wrapper class='auth auth-new'>
			{props.type === "existing" ? <SignIn /> : <SignUp />}
		</Wrapper>
	)
}
