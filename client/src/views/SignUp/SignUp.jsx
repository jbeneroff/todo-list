import React from 'react'
import { useState } from 'react'
import { signUp } from '../../services/users'
import Layout from '../../components/Layout/Layout'
import { useHistory } from 'react-router'

export default function SignUp(props) {
  const [input, setInput] = useState({ username: '', email: '', password: '' })
  const { setUser } = props
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signUp(input)
    console.log(user)
    setUser(user)
    history.push('/')
  }
  
  const handleInput = (e) => {
    const { id, value } = e.target
    setInput(prevInput => ({
      ...prevInput,
      [id]: value,
    }))
  }

  return (
    <Layout>
      SignUp
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input id="username" type="text" value={input.username} onChange={handleInput} />
        <br />
        <label>Email</label>
        <input id="email" type="email" value={input.email} onChange={handleInput} />
        <br />
        <label>Password</label>
        <input id="password" type="password" value={input.password} onChange={handleInput} />
        <br />
        <button>Sign Up</button>
      </form>
    </Layout>
  )
}
