import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <ul className='nav-links'>
      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/products">Products</Link>
      </li>
   </ul>
    </div>
  )
}

export default Header