import React, { useEffect, useState } from 'react';
import FlatCard from '../components/FlatCard';
import Banner from '../components/Banner';
import flatsData from '../flats.json';
import { Container, Row, Col } from 'react-bootstrap';

export default function FlatIndex() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    setFlats(flatsData);
  }, []);

  return (
    <div>
      <Banner
        title="AirbnRio"
        subtitle="Encontre o melhor lugar para ficar na Cidade Maravilhosa"
        imageUrl="https://tourb.com.br/img/lugares/rio-de-janeiro/praia-de-copacabana.jpg"
      />
      <Container className="my-4">
        <Row>
          {flats.map(flat => (
            <Col key={flat.id} sm={12} md={6} lg={4} className="mb-4">
              <FlatCard flat={flat} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
