import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Navigation from '../Navigation/';
import s from './NavBar.module.css';

import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { getAuthIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function NavBar() {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      <NavLink className={s.navlink} exact to="/">
        <h1 className={s.title}>Phonebook</h1>
      </NavLink>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
