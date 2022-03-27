import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap';
type Props = {}

const HeaderAmin = (props: Props) => {
  return (
      <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Administrator</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="/admin/products">Products</Nav.Link>
      <Nav.Link href="/admin/news">News</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </div>
       
  )
}

export default HeaderAmin