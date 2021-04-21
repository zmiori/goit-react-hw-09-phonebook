import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import changeFilter from '../redux/filter/filter-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../redux/items/items-operations';
import {
  getContactsFilter,
  getContactsFilteredItems,
} from '../redux/items/items-selectors';

import Filter from '../components/Filter';
import Section from '../components/Section';
import AddContactForm from '../components/AddContactForm';
import ContactsList from '../components/ContactsList';

export default function ContactsView() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsFilteredItems);
  const filter = useSelector(getContactsFilter);

  const onAddContact = value => dispatch(addContact(value));
  const onChangeFilter = e => dispatch(changeFilter(e.currentTarget.value));
  const onDeleteContact = value => dispatch(deleteContact(value));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="phonebookWrapper">
      <Section>
        <AddContactForm onSubmit={onAddContact} contacts={contacts} />
      </Section>
      <Section title="contacts">
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactsList contacts={contacts} onDeleteContact={onDeleteContact} />
      </Section>
    </div>
  );
}
