import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactCard = ({ contacts, deleteContact }) => {
  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {contacts.map((item) => (
        <Card className="mt-5" key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.number}</Card.Text>
            <Link to={`/edit/${item.id}`}>
              <Button variant="success" className="btn btn-success mx-2">
                EDIT
              </Button>
            </Link>
            <Button
              variant="danger"
              className="btn btn-success mx-2"
              onClick={() => deleteContact(item.id)}
            >
              DELETE
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactCard;
