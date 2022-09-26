import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/User/registerSlice';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const formSubmit = (e) => {
    e.preventDefault();
    if (username) {
      dispatch(login(username));
      if (user.logged_in) {
        return <Navigate replace to="/home" />;
      }
      setUsername('');
    }
    return null;
  };

  return (
    <div className="container-fluid w-50 mx-auto mt-5">
      <h2 className="h2 mt-5 mb-3 text-center">Log in</h2>
      <form onSubmit={formSubmit}>
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
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
      <NavLink to="/signup">
        <span>Sign up</span>
      </NavLink>
    </div>
  );
};

export default Login;
