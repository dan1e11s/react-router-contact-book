import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Layout from '../Layout/Layout';
import AddContact from '../AddContact/AddContact';
import EditContact from '../EditContact/EditContact';
import axios from 'axios';

const MainRoutes = () => {
  const API = 'http://localhost:8000/contacts';
  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  async function getOneContact(id) {
    let res = await axios(`${API}/${id}`);
    setOneContact(res.data);
  }

  async function getContacts() {
    let res = await axios.get(API);
    setContacts(res.data);
  }

  function addContacts(oneNewContact) {
    axios.post(API, oneNewContact);
    getContacts();
  }

  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }

  async function updateContact(id, obj) {
    await axios.patch(`${API}/${id}`, obj);
    getOneContact();
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <HomePage
              getContacts={getContacts}
              contacts={contacts}
              deleteContact={deleteContact}
            />
          }
        />
        <Route path="add" element={<AddContact addContacts={addContacts} />} />
        <Route
          path="edit/:id"
          element={
            <EditContact
              getOneContact={getOneContact}
              oneContact={oneContact}
              updateContact={updateContact}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
