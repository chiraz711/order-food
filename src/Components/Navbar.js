import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarhome() {
  return (
     <div>
       <Navbar bg="light" expand="lg" className="shadow-lg p-3 mb-5 bg-white rounded">
      <Container>
        <Navbar.Brand href="#home">Food </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     </div>
    


      
  )
  
}

export default Navbarhome
