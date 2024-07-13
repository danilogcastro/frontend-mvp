import React from 'react';
import { Container } from 'react-bootstrap';

export default function Banner(props) {
  const bannerStyle = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '160px 0',
    textAlign: 'center',
    position: 'relative'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}></div>
      <Container style={contentStyle}>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </Container>
    </div>
  );
};
