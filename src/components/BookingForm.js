// src/components/BookingForm.jsx
import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

export default function BookingForm() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Reserve!</Card.Title>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group controlId="formCheckin">
            <Form.Label>Check-in</Form.Label>
            <Form.Control type="date" name="checkin" />
          </Form.Group>
          <Form.Group controlId="formCheckout">
            <Form.Label>Check-out</Form.Label>
            <Form.Control type="date" name="checkout" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Reservar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
