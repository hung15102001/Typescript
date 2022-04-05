import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from './Banner'
import Menu from './Menu'

type Props = {}

const HeaderCli = (props: Props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        <img src="img/images.jpg" alt="" width="100px"/>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Menu />
        
      </div>
    </div>
  </nav>
  </>
  )
}

export default HeaderCli