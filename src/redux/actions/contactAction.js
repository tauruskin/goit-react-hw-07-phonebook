import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CONTACT_STORAGE,
  CONTACT_FILTER,
} from '../constants/contactConstants';

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
export const deleteContact = createAction(DELETE_CONTACT);
export const contactStorage = createAction(CONTACT_STORAGE);
export const handleFilter = createAction(CONTACT_FILTER, ({ target }) => ({
  payload: target.value,
}));

// export const addContact = (name, number) => ({
//   type: ADD_CONTACT,
//   payload: {
//   id: uuidv4(),
//   name,
//   number,
// },
// });

// export const deleteContact = (id) => ({
//   type: DELETE_CONTACT,
//   payload: id,
// });

// export const contactStorage = (arr) => ({
//   type: CONTAT_STORAGE,
//   payload: arr,
// });

// export const handleFilter = (e) => ({
//   type: QUERY_FILTER,
//   payload: e.target.value,
// });
