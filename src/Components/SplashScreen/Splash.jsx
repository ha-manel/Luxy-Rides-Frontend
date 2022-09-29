import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Splash.module.css';

const Splash = () => (
  <div
    className={`${styles.splashbg} container-fluid d-flex flex-column align-items-center vw-100`}
  >
    <h1 className={`${styles.header} text-white`}>Luxy Rides</h1>
    <div className={styles.btncontainer}>
      <NavLink to="login">
        <button type="button" className="btn btn-primary me-4 fs-4">
          Log in
        </button>
      </NavLink>
      <NavLink to="signup">
        <button type="button" className="btn btn-success ms-4 fs-4">
          Sign up
        </button>
      </NavLink>
    </div>
  </div>
);

export default Splash;
