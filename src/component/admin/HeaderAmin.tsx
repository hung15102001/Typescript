import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const HeaderAmin = (props: Props) => {
  return (
    <div>
       
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    {/* Navbar Brand*/}
    <NavLink className="navbar-brand ps-3" to="/admin">Administrator</NavLink>
    {/* Sidebar Toggle*/}
    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" ><i className="fas fa-bars" /></button>
    {/* Navbar Search*/}
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div className="input-group">
        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
      </div>
    </form>
    {/* Navbar*/}
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#!">Settings</a></li>
          <li><a className="dropdown-item" href="#!">Activity Log</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#!">Logout</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <NavLink className="nav-link" to="/admin">
              <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
              Dashboard
            </NavLink>
            <div className="sb-sidenav-menu-heading">Admin Page</div>
            <NavLink className="nav-link collapsed" to="/admin/news"  >
                  News
            </NavLink >
            <NavLink className="nav-link collapsed" to="/admin/products" >
                  Products
            </NavLink >
            <NavLink className="nav-link collapsed" to="/admin/products/add" >
                  Add Pro
            </NavLink >
         
           
          
          </div>
        </div>
       
      </nav>
     
    </div>
    
    <div id="layoutSidenav_content">
        
      <footer className="py-4 bg-light mt-auto">
          
      </footer>
    </div>
  </div>

     
    </div>
  )
}

export default HeaderAmin