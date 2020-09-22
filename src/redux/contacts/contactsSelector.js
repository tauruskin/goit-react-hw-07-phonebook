import { createSelector } from '@reduxjs/toolkit';

export const itemsSelector = state => state.contacts.items;
export const filterSelector = state => state.contacts.filter;

export const getFilteredContact = createSelector(
  [itemsSelector, filterSelector],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export const getContactById = createSelector(
  [itemsSelector, (state, contactId) => contactId],
  (items, contactId) => items.find(contact => contact.id === contactId),
);
