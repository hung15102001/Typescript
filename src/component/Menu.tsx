import React from 'react'
import { NavLink } from 'react-router-dom'


type Props = {}

const Menu = (props: Props) => {
  return (
<ul className="nav nav-tabs">
  <li className="nav-item">
    <NavLink className="nav-link" aria-current="page" to="/" >Home </NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" aria-current="page" to="/products" >Product </NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" aria-current="page" to="/about" >About</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" aria-current="page" to="/admin" >Dashboard</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" aria-current="page" to="/login" >Login</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" aria-current="page" to="/signup" >SignUp</NavLink>
  </li>
</ul>

  )
}

export default Menu