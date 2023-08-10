import { useDispatch } from 'react-redux';
import { filterContact } from './createSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filterContact(evt.currentTarget.value));
  };
  return (
    <div
      className="mb-3"
      style={{
        marginTop: 20,
      }}
    >
      <label htmlFor="exampleInputEmail1" className="form-label">
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          aria-describedby="emailHelp"
          className="form-control"
        />
      </label>
    </div>
  );
};
