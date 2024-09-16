import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Usercount = () => {
  return (
    <Container className="mt-4">
      <h1>Users Overview</h1>
      <Row>
        <Col md={4}>
          <Card bg="success" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Active Users</Card.Title>
              <Card.Text>10</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" text="dark" className="mb-4">
            <Card.Body>
              <Card.Title>Inactive Users</Card.Title>
              <Card.Text>10</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="danger" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>20</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Usercount;
