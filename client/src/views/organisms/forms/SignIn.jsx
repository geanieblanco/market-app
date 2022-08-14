import { useState } from "react"
import { Input } from "../../molecules/Molecules"
import { Button } from "../../atoms/Atoms"
import { useNavigate, Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import app from "../../../data/firebase/config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default function SignIn() {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const navigate = useNavigate()

	const handleInputChange = (input) => {
		if (input.name === "email") setEmail(input.value)
		if (input.name === "password") setPassword(input.value)
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()
		const authentication = getAuth()

		signInWithEmailAndPassword(authentication, email, password)
			.then((response) => {
				sessionStorage.setItem(
					"Auth Token",
					response._tokenResponse.refreshToken
				)
				navigate("/dashboard")
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					alert("Email Already in Use")
				}
			})
	}

	return (
		<form>
			<Input
				type='text'
				inputName='email'
				labelName='Email'
				value={email}
				inputChange={(e) => handleInputChange(e.target)}
			/>
			<Input
				type='password'
				inputName='password'
				labelName='Password'
				value={password}
				inputChange={(e) => handleInputChange(e.target)}
			/>
			<Button onClick={(e) => handleFormSubmit(e)} buttonCopy='Sign In' />
			<p>
				Need an account?&nbs;
				<Link to={"/auth/new"}>Register now.</Link>
			</p>
		</form>
	)
}
