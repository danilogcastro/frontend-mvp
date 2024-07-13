import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import FlatIndex from './pages/FlatIndex';
import FlatShow from './pages/FlatShow';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">AirbnRio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/apartamentos">Estadias</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/apartamentos" element={<FlatIndex />} />
          <Route path="/apartamentos/:id" element={<FlatShow />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;