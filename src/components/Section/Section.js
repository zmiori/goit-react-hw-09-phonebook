import React from 'react';
import s from './Section.module.css';

export default function Section({ title, children }) {
  const normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  return (
    <section className={s.section}>
      {title ? <h2 className={s.title}>{normalizedTitle(title)}</h2> : ''}
      {children}
    </section>
  );
}
