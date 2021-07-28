import { Router } from 'express'
import restrict from '../helpers/restrict.js'

const router = Router()

// get all todos
router.get('/todos', getAllTodos)
// get id todo
router.get('/todos/:id', getTodo)
// post createTodo
router.post('/todos', restrict, createTodo)
// put updateTodo
router.put('/todos/:id', restrict, updateTodo)
// delete todo
router.delete('/todos/:id', restrict, deleteTodo)


export default router