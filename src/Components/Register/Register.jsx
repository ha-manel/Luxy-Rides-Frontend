/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux/User/registerSlice';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && name && username) {
      dispatch(register({ email, name, username }));
      setEmail('');
      setName('');
      setUsername('');
    }
  };

  if (user.logged_in) {
    return <Navigate replace to="/home" />;
  }

  return (
    <div
      className={`${styles.container} container-fluid vw-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <h2 className={`${styles.header} fs-2 mb-5`}>Sign Up</h2>
      <form onSubmit={formSubmit} className={styles.form}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Sign Up
        </button>
      </form>
      <NavLink to="/login">
        <span>Log in</span>
      </NavLink>
    </div>
  );
};

export default Register;
