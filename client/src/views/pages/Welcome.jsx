import React from "react"
import { Outlet } from "react-router-dom"
import Wrapper from "../templates/Templates"

export default function Welcome() {
	return (
		<Wrapper>
			<Outlet />
		</Wrapper>
	)
}
