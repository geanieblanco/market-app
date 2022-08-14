import React from "react"
import { useNavigate } from "react-router-dom"

export default function AuthButton() {
	const navigate = useNavigate()

	const handleLogout = () => {
		sessionStorage.removeItem("Auth Token")
		navigate("/auth/new")
	}
	return <button onClick={handleLogout}>Log out</button>
}
