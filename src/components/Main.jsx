import React from 'react'
import "../style/Main.css"
import Task from './Task'
const Main = () => {
  return (
    <>
    
    <div className='container'>
      <h1 className='title'> Daily Goals</h1>
        <form >
            <input type="text" placeholder='Title' />
            <textarea  placeholder='Description'></textarea>
            <button type='submit'>ADD</button>
        </form>
    </div>
    <Task/>
    </>
  )
}

export default Main