import React from 'react'
import { Button } from '../atoms/Atoms'
import '../../styles/app.scss'

export default function Styleguide() {
  return (
    <main>
      <h1 className="logo">Rialto</h1>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p>Body</p>
      <Button buttonCopy="Create Organizer" class="button--main wide" />
      <Button buttonCopy="Create Organizer" class="button--secondary" />
    </main>
  )
}
