import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from './operations';
import { useEffect } from 'react';

export function Contacts() {
  const { items, isLoading, error, filter } = useSelector(
    state => state.contacts
  );
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContact = () => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  return (
    <div>
      <h2>Contacts</h2>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ul>
        {getFilterContact().map(({ name, phone, id }) => (
          <li key={id}>
            {name}: {phone}
            {'  '}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => onDeleteContact(id)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
