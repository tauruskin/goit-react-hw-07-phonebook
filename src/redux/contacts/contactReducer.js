import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  getContactsSuccess,
  deleteContactSuccess,
  handleFilter,
} from './contactAction';

const removeContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

export const items = createReducer([], {
  [getContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: removeContact,
});
export const filter = createReducer('', {
  [handleFilter]: (state, { payload }) => (state = payload),
});
