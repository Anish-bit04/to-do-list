import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='header'>
      <Link to="/">Main</Link>
      <Link to="/task">Task</Link>
      
    </div>
    
    </>
  )
}

export default Header