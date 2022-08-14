import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileDrawer() {
  return (
    <div className="mobile-drawer">
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/find-events'}>Find Events</Link>
        <Link to={'/find-vendors'}>Find Vendors</Link>
      </ul>
    </div>
  )
}
