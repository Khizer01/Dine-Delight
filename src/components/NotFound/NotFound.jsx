import React from 'react'
import error from '../../assets/error.jpg';
import './NotFound.css';
function NotFound() {
  return (
    <div className='container'>
      <img src={error} alt="404 Not Found" className='error' />
    </div>
  )
}

export default NotFound
