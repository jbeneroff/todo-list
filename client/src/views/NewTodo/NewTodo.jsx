import {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { createTodo } from '../../services/todos'
import { useHistory } from 'react-router'

export default function NewTodo(props) {
  const [input, setInput] = useState({ name: "", due_date: "", completed: "" })
  const history = useHistory()
  
  const handleChange = (e) => {
    const { id, value } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createTodo(input)
    history.push('/')
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      New Todo
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input id='name' type="text" value={input.name} onChange={handleChange} />
        <br />
        <label>Due Date</label>
        <input id='due_date' type="text" value={input.due_date} onChange={handleChange} />
        <br />
        <label>Completed</label>
        <input id='completed' type="text" value={input.completed} onChange={handleChange} />
        <br />
        <button>Create Todo</button>
      </form>
    </Layout>
  )
}
