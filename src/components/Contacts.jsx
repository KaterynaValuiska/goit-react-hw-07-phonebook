import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './createSlice';

export function Contacts() {
  const contactsUser = useSelector(state => state.contacts.items);
  const contactFilter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getFilterContact = () => {
    return contactsUser.filter(contact =>
      contact.name.toLowerCase().includes(contactFilter)
    );
  };
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {getFilterContact().map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
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
