import React, { useEffect } from 'react';
import ContactCard from '../ContactCard/ContactCard';

const HomePage = ({ getContacts, contacts, deleteContact }) => {
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <ContactCard contacts={contacts} deleteContact={deleteContact} />
    </>
  );
};

export default HomePage;
