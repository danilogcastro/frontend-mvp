import React from 'react';
import { useParams } from 'react-router-dom';
import flatsData from '../flats.json';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Banner from '../components/Banner';
import BookingForm from '../components/BookingForm';

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
            <BookingForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
