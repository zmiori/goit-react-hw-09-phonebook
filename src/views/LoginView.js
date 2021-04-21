import { useState } from 'react';
import { useDispatch } from 'react-redux';

import s from '../components/AddContactForm/AddContactForm.module.css';

import { login } from '../redux/auth/auth-operations';

export default function LoginView() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
    return password;
  };

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
    return email;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    // console.log(user);
    dispatch(login(user));
    setPassword('');
    setEmail('');
  };

  return (
    <div className={s.wrapper}>
      <h1 className="display-6">Login</h1>

      <form
        className={s.wrapper}
        onSubmit={e => handleSubmit(e)}
        autoComplete="off"
      >
        <label className={s.formItem}>
          Email
          <input
            className="form-control"
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={e => handleEmailChange(e)}
          />
        </label>

        <label className={s.formItem}>
          Password
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={e => handlePasswordChange(e)}
          />
        </label>

        <button type="submit" className={`btn btn-success ${s.formBtn}`}>
          Login
        </button>
      </form>
    </div>
  );
}
