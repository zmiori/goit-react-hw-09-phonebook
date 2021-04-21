import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './AddContactForm.module.css';

export default function AddContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleNameChange = e => {
    setName(e.currentTarget.value);
    return name;
  };
  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
    return number;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    onSubmit({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.addContactForm}>
      <div className={s.formItem}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter name"
          name="name"
          id={nameInputId}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={s.formItem}>
        <label htmlFor={numberInputId}> Number </label>
        <input
          className="form-control"
          type="tel"
          placeholder="Enter phone number"
          name="number"
          id={numberInputId}
          value={number}
          onChange={handleNumberChange}
        />
      </div>

      <button
        type="submit"
        disabled={!name}
        className={`btn btn-success ${s.formItem} ${s.formBtn}`}
      >
        <span className={s.btnText}> Add Contact</span>
      </button>
    </form>
  );
}
