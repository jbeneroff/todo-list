import {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { getAllTodos } from '../../services/todos'

export default function Home(props) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getAllTodos()
      setTodos(data)
    }
    fetchTodos()
  }, [])

  return (
    <Layout user={props.user}>
      {todos.map((todo) => {
        return <div>{todo.name}</div>
      })}
    </Layout>
  )
}
