import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import "./styles/app.scss"

function App() {
	const navigate = useNavigate()

	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token")

		if (authToken) {
			navigate("/dashboard")
		}
	})

	return (
		<>
			<Outlet />
		</>
	)
}

export default App
