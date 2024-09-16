import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function EditUser() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/user/${id}`);
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('Failed to fetch user details');
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4000/api/updateUser/${id}`, formData);
      if (response.data.status === 1) {
        Swal.fire({
          title: 'Success!',
          text: 'User updated successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/listuser'); // Redirect to the list user page
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Error updating user',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.log('Backend response:', response.data);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Error updating user',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 mt-1">
      <Row className="w-100">
        <Col className="d-flex justify-content-center">
          <div className="p-4 border rounded shadow-sm bg-white">
            <h1 className="text-center mb-4">Edit User</h1>
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
                Update User
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EditUser;
