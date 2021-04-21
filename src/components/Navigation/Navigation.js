import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getAuthIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedin = useSelector(getAuthIsLoggedIn);

  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isLoggedin && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
