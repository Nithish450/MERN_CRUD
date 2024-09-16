import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaBell, FaEnvelope, FaUser } from 'react-icons/fa';

const CustomNavbar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="px-3"
      style={{ height: '60px', borderBottom: '1px solid #ddd' }} // Adjust height and add a bottom border
    >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex ">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#notifications">
            <FaBell size={20} />
          </Nav.Link>
          <Nav.Link href="#messages" className="mx-3">
            <FaEnvelope size={20} />
          </Nav.Link>
          <Nav.Link href="#profile">
            <FaUser size={20} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
