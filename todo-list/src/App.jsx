import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // setting the newTodo variable with useState
  const [newTodo, setNewTodo] = useState("")

  // setting the todo varibale for the actual <ul>li<ul>
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEM")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  // using useEffect to store data at the local storage
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todo))
  }, [todo]);
// to do logic start :
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

  function toggleTodo(id, completed) {
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

  function deleteTodo(id){
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  // todo logic ends 

  // returning JSX :
  return (
    <main>
      <h1 className='text-9xl font-black tracking-tight pt-32'>My To Do List</h1>
      <form onSubmit={handleTodo} className='pt-20 flex space-x-2 flex-1 w-full'>
        <div className='w-full align-middle'>
          <input
          className='h-20 w-full text-3xl text font-bold hover:'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          type='text' 
          id='item'
          />
        </div>
      </form>
      <h1 className='text-4xl font-black tracking-tight pt-8'>My todays list</h1>
      <ul>
        {todo.length === 0 && "No to does yet"}
        {todo.map(todos => {
          return(
          <li>
            <label className='text-3xl font-semibold'>
              <input type='checkbox' checked={todos.completed} 
                onChange={e => toggleTodo(todos.id, e.target.checked)}
                className='h-9 w-9'
              />
              {todos.title}
            </label>
            <button onClick={() => deleteTodo(todos.id)} className='rounded-lg'>Delete</button>
          </li>
          )
        })}
      </ul>
    </main>
  )
}

export default App
