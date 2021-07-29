import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      Nav {props.user?.username}
    </div>
  )
}
