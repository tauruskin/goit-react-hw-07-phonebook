import { createSelector } from '@reduxjs/toolkit';

export const itemsSelector = state => state.contacts.items;
export const filterSelector = state => state.contacts.filter;

export const getFilteredContact = state => {
  const items = itemsSelector(state);
  const filter = filterSelector(state).toLowerCase();

  return items.filter(contact => contact.name.toLowerCase().includes(filter));
};

export const getContactById = (state, contactId) => {
  const items = itemsSelector(state);
  return items.find(contact => contact.id === contactId);
};

export const getContactById = createSelector(
  [itemsSelector, (state, contactId) => contactId],
  (items, contactId) => items.find(contact => contact.id === contactId),
);
