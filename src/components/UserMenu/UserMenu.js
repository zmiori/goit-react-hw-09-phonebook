import { useCallback } from 'react';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserEmail } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getAuthUserEmail);
  const onLogoutSubmit = useCallback(v => dispatch(logout(v)), [dispatch]);

  const handleLogout = e => {
    e.preventDefault();
    onLogoutSubmit();
  };

  return (
    <div className={s.container}>
      <span className={s.email}>Email: {email} </span>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
}
