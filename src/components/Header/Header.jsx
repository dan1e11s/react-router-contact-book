import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="primary">
      <Container className="d-flex justify-content-start">
        <Link to="/">
          <Navbar.Brand
            className={
              location.pathname === '/' ? 'btn btn-outline-light' : 'btn'
            }
          >
            Home
          </Navbar.Brand>
        </Link>
        <Link to="/add">
          <Navbar.Brand
            className={
              location.pathname === '/add' ? 'btn btn-outline-light' : 'btn'
            }
          >
            Add Contact
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
