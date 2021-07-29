import {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { getAllTodos } from '../../services/todos'

export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      let data = await getAllTodos()
      setTodos(data)
    }
    fetchTodos()
  })

  return (
    <Layout>
      {todos.map((todo) => {
        return <div>{todo.name}</div>
      })}
    </Layout>
  )
}
