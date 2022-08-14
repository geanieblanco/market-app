import { useState } from "react"
import { Input } from "../../molecules/Molecules"
import { Button } from "../../atoms/Atoms"
import { useNavigate, Link } from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import app from "../../../data/firebase/config"
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth"

export default function SignUp() {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [phone, setPhone] = useState()
	const [zipcode, setZipcode] = useState()
	const navigate = useNavigate()

	const handleFormSubmit = (e) => {
		e.preventDefault()
		const authentication = getAuth()

		createUserWithEmailAndPassword(authentication, email, password)
			.then((response) => {
				sessionStorage.setItem(
					"Auth Token",
					response._tokenResponse.refreshToken
				)
				navigate("/dashboard")
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					alert("Please check the Password")
				}
				if (error.code === "auth/user-not-found") {
					alert("Please check the Email")
				}
			})
	}

	const handleInputChange = (input) => {
		if (input.name === "email") setEmail(input.value)
		if (input.name === "password") setPassword(input.value)
		if (input.name === "phone") setPhone(input.value)
		if (input.name === "zipcode") setZipcode(input.value)
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
			<Input
				type='phone'
				inputName='phone'
				labelName='Phone'
				value={phone}
				inputChange={(e) => handleInputChange(e.target)}
			/>
			<Input
				type='text'
				inputName='zipcode'
				labelName='Zipcode'
				value={zipcode}
				inputChange={(e) => handleInputChange(e.target)}
			/>
			<Button onClick={handleFormSubmit} buttonCopy='Sign Up' />
			<p>
				Already have an account?&nbs;
				<Link to={"/auth"}>Login now.</Link>
			</p>
		</form>
	)
}
