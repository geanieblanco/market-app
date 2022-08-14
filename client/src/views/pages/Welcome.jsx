import React from 'react'
import { Button } from '../atoms/Atoms'
import './styles/welcome.scss'

export default function Welcome() {
  return (
    <main className="welcome">
      <div className="welcome_header">
        <h3>Welcome to</h3>
        <h1 className="logo">Rialto</h1>
      </div>
    </main>
  )
}
