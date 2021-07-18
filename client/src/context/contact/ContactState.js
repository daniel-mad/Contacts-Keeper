import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jack johnson',
        email: 'jack@mail.com',
        phone: '222-222-2222',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Jill johnson',
        email: 'jill@mail.com',
        phone: '222-222-3333',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Sara Watson',
        email: 'sara@mail.com',
        phone: '333-444-3333',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Hary Watson',
        email: 'sara@mail.com',
        phone: '333-444-3333',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  // Delete Contact
  // Set current Contact
  // Clear current Contact
  // Update Contact
  // Filter Contacts
  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;