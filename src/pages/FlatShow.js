import React from 'react';
import { useParams } from 'react-router-dom';
import flatsData from '../flats.json';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Banner from '../components/Banner';

export default function FlatShow() {
  const { id } = useParams();
  const flat = flatsData.find(f => f.id === parseInt(id));

  if (!flat) {
    return <div>Apartamento não encontrado</div>;
  }

  const containerStyle = {
    position: "relative",
    bottom: "52px"
  }

  return (
    <div>
      <Banner
        title={flat.name}
        subtitle={flat.address}
        imageUrl={flat.imageUrl}
      />
      <Container className="my-4" style={containerStyle}>
        <Row>
          <Col md={8}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>{flat.description}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>
                  Preço: R${flat.price} / noite
                  <br />
                  Acomoda: {flat.capacity} pessoas
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
