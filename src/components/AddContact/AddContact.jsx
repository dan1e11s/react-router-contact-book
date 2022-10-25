import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddContact = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [image, setImage] = useState('');

  function createContact() {
    if (!name || !number || !image) {
      alert('Some inputs are empty!');
      return;
    }

    let newContact = {
      id: Date.now(),
      name,
      number,
      image,
    };

    addContacts(newContact);

    setName('');
    setNumber('');
    setImage('');
  }

  return (
    <Form className="container mt-3">
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="Enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="Enter image url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Link to="/">
        <Button variant="primary" type="button" onClick={createContact}>
          ADD
        </Button>
      </Link>
    </Form>
  );
};

export default AddContact;
