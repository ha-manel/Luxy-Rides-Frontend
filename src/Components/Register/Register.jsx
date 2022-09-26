/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/User/registerSlice';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && name && username) {
      dispatch(register({ email, name, username }));
      setEmail('');
      setName('');
      setUsername('');
    }
  };

  return (
    <div className="container-fluid w-25 mx-auto mt-5">
      <h2 className="h2 mt-5 mb-3 text-center">Sign Up</h2>
      <form onSubmit={formSubmit}>
        <div className="form-floating mb-3 mt-4">
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
