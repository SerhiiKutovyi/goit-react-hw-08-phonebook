import PropTypes from 'prop-types';
import { ContactStyled } from './ContactList.styles';

export const ContactList = ({ contacts, deleteUsers }) => {
  return (
    <>
      <ContactStyled>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteUsers(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ContactStyled>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteUsers: PropTypes.func.isRequired,
};
