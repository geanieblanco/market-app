import React from "react"
import { NavBar } from "../../atoms/Atoms"
import { AuthButton } from "../../molecules/Molecules"

export default function Header() {
	return (
		<header>
			<NavBar>
				<AuthButton />
			</NavBar>
		</header>
	)
}
