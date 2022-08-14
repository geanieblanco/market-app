import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../templates/Templates'

export default function Dashboard() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}
