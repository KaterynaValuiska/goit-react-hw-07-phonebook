import FormRegistation from './FormRegistation';
// import { useState } from 'react';
import { Contacts } from './Contacts';
import { Filter } from './Filter';

// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, deleteContact } from './store';

export default function App() {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1>Phonebook</h1>
      <FormRegistation />
      <Filter />
      <Contacts />
    </div>
  );
}
