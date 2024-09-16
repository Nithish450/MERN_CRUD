import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function ForgotPassword() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Forgot Password</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Enter your email address, and we'll send you a link to reset your password.
              </Form.Text>
            </Form.Group>

            <Link to="/reset-password" className="btn btn-primary w-100">
              Submit
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
