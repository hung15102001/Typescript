import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { authen,isAuthenticate } from '../ultils/localStore'


type Props = {}

const Menu = (props: Props) => {  
  const a = isAuthenticate();

  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("user");
    navigate('/login')
  }
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
  {a.user && (
    <>
  <li className="nav-item">
  <NavLink className="nav-link" aria-current="page" to="/admin" >Dashboard</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" aria-current="page" to="/login" onClick={()=> logout()}>Logout</NavLink>
  </li>
   <li className="nav-item">
    <Nav className="nav-link" aria-current="page" >Chào:  {a.user.user.name}</Nav>
   </li>
   </>
  )}


  {!a && (
    <>
  <li className="nav-item">
 <NavLink className="nav-link" aria-current="page" to="/login" >Login</NavLink>
 </li>

 <li className="nav-item">
 <NavLink className="nav-link" aria-current="page" to="/signup" >SignUp</NavLink>
 </li>
 </>
  )}
 
</ul>

  )
}

export default Menu