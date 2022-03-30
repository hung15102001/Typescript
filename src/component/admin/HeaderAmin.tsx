import React from 'react'
import { NavLink, Outlet , Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';
type Props = {}

const HeaderAmin = (props: Props) => {
  return (
      <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Administrator</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="text-decoration-none mx-2 text-white" to={"#home"}>Home</Link>
      <Link className="text-decoration-none mx-2 text-white" to={"/admin/products"}>Products</Link>
      <Link className="text-decoration-none mx-2 text-white" to={"/admin/news"}>News</Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
       
  )
}

export default HeaderAmin