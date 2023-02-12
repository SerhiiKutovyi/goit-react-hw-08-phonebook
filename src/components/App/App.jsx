import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContacts, filterContacts } from 'redux/slice';
import { selectContacts } from 'redux/selector';
import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { Section } from './App.styles';

// const LOCAL_KEY = 'Users-key';

export const App = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const contacts = useSelector(selectContacts);

  const filterUsers = event => {
    setFilter(event.target.value);
    dispatch(filterContacts(filter));
  };

  const deleteUsers = userId => {
    dispatch(deleteContacts(userId));
  };

  const verification = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(
        user =>
          user.name.toLowerCase().includes(filter.toLowerCase()) ??
          user.number.includes(filter)
      );
    }
  };

  function formSubmitHandler(data) {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    const newUser = {
      id: nanoid(),
      ...data,
    };
    dispatch(addContacts(newUser));
  }

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onContactSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} click={filterUsers} />
        <ContactList contacts={verification()} deleteUsers={deleteUsers} />
      </Section>
    </>
  );
};
