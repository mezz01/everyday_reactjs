import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>My To Do List</h1>
      <form className='new-todo-form'>
        <div className='row-todo'>
          <label htmlFor='item'>Add the thing (we know you won't do)</label>
          <input type='text' id='item'/>
        </div>
        <button className='btn-add'>Add to list</button>
      </form>
      <h1>My todays list</h1>
      <ul>
        <li>torororo my to do that m not doing</li>
      </ul>
    </>
  )
}

export default App
