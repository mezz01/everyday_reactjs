import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // setting the newTodo variable with useState
  const [newTodo, setNewTodo] = useState("")

  // setting the todo varibale for the actual <ul>li<ul>
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
  // cleaning the input in form
   setNewTodo("")
  }

  function toggleTodo(e) {
      setTodo(currentTodo => {
        return currentTodo.map(todo => {
          if (todo.id === id)
          {
            return{...todo, completed}
          }
          return todo
        })
      })
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
        {todo.map(todos => {
          return(
          <li>
            <label>
              <input type='checkbox' checked={todos.completed} 
                onChange={e => toggleTodo(todos.id, e.target.checked)}
              />
              Todo 1
            </label>
            <button className='rounded-lg'>Delete</button>
          </li>
          )
        })}

      </ul>
    </>
  )
}

export default App
