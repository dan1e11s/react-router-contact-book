import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EditContact = ({ getOneContact, oneContact, updateContact }) => {
  const { id } = useParams();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    getOneContact(id);
  }, []);

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setNumber(oneContact.number);
      setImage(oneContact.image);
    }
  }, [oneContact]);

  function saveChanges() {
    let editedObj = {
      name,
      number,
      image,
    };

    updateContact(id, editedObj);
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
        <Button variant="success" type="button" onClick={saveChanges}>
          SAVE
        </Button>
      </Link>
    </Form>
  );
};

export default EditContact;
