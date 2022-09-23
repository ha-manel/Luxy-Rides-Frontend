import React from 'react';
import { NavLink } from 'react-router-dom';

const Splash = () => (
  <div
    className="container-fluid d-flex align-items-center justify-content-center vw-100"
    style={{ marginLeft: '-260px' }}
  >
    <div>
      <NavLink to="login">
        <button type="button" className="btn btn-primary mx-3">
          Log in
        </button>
      </NavLink>
      <NavLink to="signup">
        <button type="button" className="btn btn-success mx-3">
          Sign up
        </button>
      </NavLink>
    </div>
  </div>
);

export default Splash;
