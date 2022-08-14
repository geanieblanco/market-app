import React from 'react'
import { NavBar } from '../../atoms/Atoms'
import { AuthButton } from '../../molecules/Molecules'

export default function Header() {
  return (
    <header>
      <NavBar>
        <h1>Rialto</h1>
        <AuthButton />
      </NavBar>
    </header>
  )
}
