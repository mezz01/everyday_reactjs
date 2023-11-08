import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todo, setTodo] = useState([])

  function handleTodo(e) {
    // preventing react from refreshing website
    e.preventDefault()

    setTodo(currentTodo =>{
      return[
        ...currentTodo,
        {id:crypto.randomUUID(), title: newTodo, completed: false},
      ]
    })

   setNewTodo("")
  }
  return (
    <>
      <h1>My To Do List</h1>
      <form onSubmit={handleTodo} className='new-todo-form'>
        <div className='row-todo'>
          <label htmlFor='item'>Add the thing (we know you won't do)</label>
          <input 
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          type='text' 
          id='item'
          />
        </div>
        <button className='btn-add'>Add to list</button>
      </form>
      <h1>My todays list</h1>
      <ul>
        <li>
          <label>
            <input type='checkbox' />
            Todo 1
          </label>
        </li>
        <li>
          <label>
            <input type='checkbox' />
            Todo 2
          </label>
        </li>
      </ul>
    </>
  )
}

export default App
