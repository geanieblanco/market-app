import { useEffect } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { Welcome } from "./views/pages/Pages"
import "./styles/app.scss"

function App() {
	const navigate = useNavigate()
	let location = useLocation()

	const getPageName = () => {
		let pageName

		if (location.pathname.contains) console.log(pageName)
		// return pageName
	}

	getPageName()

	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token")

		if (authToken) {
			navigate("/dashboard")
		}
	})

	return <>{location.pathname === "/" ? <Welcome /> : <Outlet />}</>
}

export default App
