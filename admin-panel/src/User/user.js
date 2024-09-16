import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

function User() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/addUser', {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email
      });

      if (response.data.status === 1) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'User added successfully',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message || 'Error adding user',
          confirmButtonText: 'OK'
        });
        console.log('Backend response:', response.data);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error adding user',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <h1 className="text-center mb-4">Add User</h1>
        <Card className="p-4 border rounded shadow-sm bg-white">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Add User
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default User;
