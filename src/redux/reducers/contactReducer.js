import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  contactStorage,
  handleFilter,
} from '../actions/contactAction';

const removeContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

export const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: removeContact,
  [contactStorage]: (state, { payload }) => payload,
});

export const filter = createReducer('', {
  [handleFilter]: (state, { payload }) => (state = payload),
});
