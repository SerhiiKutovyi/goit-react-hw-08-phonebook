import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slice';
import { fetchContacts, addContact, deleteContact } from 'redux/operation';
import { selectContacts, selectIsLoading, selectError } from 'redux/selector';
import { nanoid } from 'nanoid';

import { Section } from './App.styles';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

// const LOCAL_KEY = 'Users-key';

export const App = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterUsers = event => {
    setFilter(event.target.value);
    dispatch(filterContacts(filter));
  };

  const deleteUsers = userId => {
    dispatch(deleteContact(userId));
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
    dispatch(addContact(newUser));
  }

  return (
    <>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        <>
          {loading && <Loader />}

          <Section>
            <h1>Phonebook</h1>
            <ContactForm onContactSubmit={formSubmitHandler} />
            <h2>Contacts</h2>
            <Filter filter={filter} click={filterUsers} />
            <ContactList contacts={verification()} deleteUsers={deleteUsers} />
          </Section>
        </>
      )}
    </>
  );
};
