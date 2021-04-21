import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <nav>
    <NavLink to="/register" className={s.link} activeClassName={s.activeLink}>
      Register
    </NavLink>

    <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
      Login
    </NavLink>
  </nav>
);

export default AuthNav;
