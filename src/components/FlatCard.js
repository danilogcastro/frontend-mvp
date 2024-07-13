import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function FlatCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.flat.name}</Card.Title>
        <Card.Text>
          {props.flat.address}
          <br />
          R${props.flat.price} por noite
        </Card.Text>
        <Link to={`/apartamentos/${props.flat.id}`}>
          <Button variant="info">Ver Detallhes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};