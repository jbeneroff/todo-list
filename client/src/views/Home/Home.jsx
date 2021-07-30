import {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { getAllTodos } from '../../services/todos'
import { Link } from 'react-router-dom'

export default function Home(props) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getAllTodos()
      setTodos(data)
    }
    fetchTodos()
  }, [])

  const displayEditLink = (todo) => {
    if (todo.userId === props.user?.id)
      return <Link to={`/edit-todo/${todo._id}`}>Edit</Link>
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      {todos.map((todo, key) => {
        return (
          <div key={todo._id}>
            {todo.name}
            <br />
            {displayEditLink(todo)}
          </div>
        )
      })}
    </Layout>
  )
}
