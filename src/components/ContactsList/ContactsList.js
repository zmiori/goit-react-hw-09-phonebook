import React from 'react';
import s from './ContactsList.module.css';

export default function ContactsList({ contacts, onDeleteContact }) {
  const normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  return (
    <ul className={s.list}>
      {contacts.length > 0
        ? contacts.map(contact => (
            <li className={s.contactItem} key={contact.id} name={contact.name}>
              <span className={s.contactData}>
                {normalizedTitle(contact.name)} : {contact.number}
              </span>
              <button
                type="button"
                className="deleteBtn btn btn-outline-dark"
                onClick={() => onDeleteContact(contact)}
              >
                Удалить
              </button>
            </li>
          ))
        : 'No contacts added yet.'}
    </ul>
  );
}
