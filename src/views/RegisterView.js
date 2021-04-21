import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

import s from '../components/AddContactForm/AddContactForm.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value);
    return name;
  };

  const handleEmailChange = e => {
    setEmail(e.currentTarget.value);
    return email;
  };

  const handlePasswordChange = e => {
    setPassword(e.currentTarget.value);
    return password;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    // console.log(user);
    dispatch(register(user));
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className={s.wrapper}>
      <h1 className="display-6">Register</h1>

      <form onSubmit={e => handleSubmit(e)} autoComplete="off">
        <label className={` ${s.formItem}`}>
          Name
          <input
            placeholder="Name"
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={e => handleNameChange(e)}
          />
        </label>

        <label className={s.formItem}>
          Email
          <input
            placeholder="Email"
            className="form-control"
            type="email"
            name="email"
            value={email}
            onChange={e => handleEmailChange(e)}
          />
        </label>

        <label className={s.formItem}>
          Password
          <input
            placeholder="Password"
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={e => handlePasswordChange(e)}
          />
        </label>

        <div>
          <button type="submit" className={`btn btn-success ${s.formBtn}`}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
