import React from 'react'
import "../style/Main.css"
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
    </>
  )
}

export default Main