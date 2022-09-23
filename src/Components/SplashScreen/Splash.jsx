import React from 'react';
import { NavLink } from 'react-router-dom';

const Splash = () => (
  <div className="container-fluid">
    <NavLink to="login">
      <button type="button" className="btn btn-primary">Log in</button>
    </NavLink>
    <NavLink to="signup">
      <button type="button" className="btn btn-success">Sign up</button>
    </NavLink>
  </div>
);

export default Splash;
