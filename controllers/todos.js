import Todo from '../models/todo.js'

// export const getAllTodos = async (req, res) => {
//   try {
//     const todos = await Todo.find({})
//     res.send(todos)
//   } catch (e) {
//     res.status(500).json({error: e.message})
//   }
// }

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user })
    res.send(todos)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

export const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body)
    todo.userId = req.user
    await todo.save()
    res.status(201).json(todo)
  } catch (e) {
    res.status(500).json({error: e.message})
  }
}

// res.send or res.json
export const getTodo = async (req, res) => {
  try {
    const {id} = req.params
    const todo = await Todo.findById(id)
    if (todo) {
      res.json(todo)
    } else {
      res.status(404).json({ error :e.message})
    }
  } catch (e) {
    res.status(500).json({ error: e.message})
  }
}

