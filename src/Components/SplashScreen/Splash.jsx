import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Splash.module.css';

const Splash = () => (
  <div
    className={`${styles.splashbg} container-fluid d-flex align-items-center justify-content-center vw-100`}
  >
    <div className={styles.btncontainer}>
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
