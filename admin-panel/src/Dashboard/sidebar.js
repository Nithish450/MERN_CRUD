import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SideNav = () => {
  return (
    <Navbar 
      expand="lg" 
      className="d-flex flex-column vh-100 p-3 border-end"
      style={{ width: '250px', backgroundColor: '#007bff' }} 
    >
      <h4 className="text-center mb-4 text-white">Dashboard</h4>
      <Container fluid className="p-0">
        <Nav className="flex-column mt-2">
          <Nav.Link 
            as={Link} 
            to="/dashboard" 
            className="my-2 px-3 rounded text-white"
          >
            Dashboard
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/user" 
            className="my-2 py-2 px-3 rounded text-white"
          >
            User
          </Nav.Link>
          <Nav.Link 
            as={Link} 
            to="/listuser" 
            className="my-2 py-2 px-3 rounded text-white"
          >
            List User
          </Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SideNav;
