// src/components/LandingPage.jsx
import React from 'react';
import Banner from '../components/Banner';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Banner
        title="AirbnRio"
        subtitle="Encontre o melhor lugar para ficar na Cidade Maravilhosa"
        imageUrl="https://tourb.com.br/img/lugares/rio-de-janeiro/praia-de-copacabana.jpg"
      />
      <Container>
        <Row className="mt-5">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Variedade de Apartamentos</Card.Title>
                <Card.Text>
                  Escolha de acordo com suas necessidades (e orçamento)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Segurança</Card.Title>
                <Card.Text>
                  Efetue seus pagamentos em um ambiente seguro, sem dor de cabeça
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Suporte 24h</Card.Title>
                <Card.Text>
                  Preocupe-se apenas com a sua viagem. Nosso time está aqui para te ajudar!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Button href="/apartamentos" variant="primary" className="mt-4 d-flex justify-content-center">Comece Agora</Button>
        </Row>
      </Container>
    </div>
  );
};