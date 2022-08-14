import React from 'react'
import { SignIn, SignUp } from '../organisms/forms/Forms'
import './styles/authentication.scss'

export default function Authentication(props) {
  return (
    <main className="auth auth-new">
      <h1>{props.title}</h1>
      {props.type === 'existing' ? <SignIn /> : <SignUp />}
    </main>
  )
}
