import React from 'react'
import {
  CreateVendor,
  CreateOrganizer,
  CreateEvent,
} from '../organisms/forms/Forms'
import './styles/create-new.scss'

export default function CreateNew(props) {
  const createType = () => {
    if (props.type === 'vendor') return <CreateVendor />
    if (props.type === 'organizer') return <CreateOrganizer />
    if (props.type === 'event') return <CreateEvent />
  }

  return (
    <main className="create-new">
      <h1>Create New {props.type}</h1>
      {createType()}
    </main>
  )
}
