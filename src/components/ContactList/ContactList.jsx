import styles from './ContactList.module.css';
import './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={styles.item} key={id}>
              <span>{name}</span>:<span className={styles.span}>{number}</span>
              <button
                className={styles.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                <FontAwesomeIcon className={styles.icon} icon={faUserXmark} />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
