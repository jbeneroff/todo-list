import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from '../../services/users'
import { useHistory } from 'react-router'

export default function Navbar(props) {

  const history = useHistory()

  const handleSignOut = () => {
    signOut()
    props.setUser(null)
    history.push('/')
  }

  return (
    <div>
      <Link to="/">Todos</Link>
      {props.user ? (
        <>
          <div>{props.user?.username}</div>
          <Link to='new-todo'>Create a new todo</Link>
          <br />
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  )
}
