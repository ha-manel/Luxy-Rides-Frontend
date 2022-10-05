import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <>
      <div
        className={`${styles.sidebarCnt} container-fluid overflow-hidden d-none d-md-block position-fixed start-0 top-0`}
      >
        <div className="vh-100 overflow-auto w-100">
          <div className={`${styles.navbarContainer} vh-100 pt-5`}>
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start">
              <NavLink
                to="/home"
                className="d-flex align-items-center pb-sm-3 mb-3 me-md-auto text-decoration-none"
              >
                <span className={`${styles.brandName} fs-1 ps-4`}>
                  Luxy Rides
                </span>
              </NavLink>
              <ul
                className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="w-100">
                  <NavLink to="/home" className="nav-link mb-2 fs-5">
                    <i className="fa-solid fa-house me-2" />
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to={`/reserve/${null}`}
                    className="nav-link mb-2 fs-5"
                  >
                    <i className="fa-solid fa-car-side me-2" />
                    <span className="ms-1 d-none d-sm-inline">Reserve</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink to="/reservations" className="nav-link mb-2 fs-5">
                    <i className="fa-solid fa-calendar-days me-2" />
                    <span className="ms-1 d-none d-sm-inline">
                      My Reservations
                    </span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink to="/add-car" className="nav-link mb-2 fs-5">
                    <i className="fa-solid fa-plus me-2" />
                    <span className="ms-1 d-none d-sm-inline">Add Car</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink to="/delete-car" className="nav-link mb-2 fs-5">
                    <i className="fa-solid fa-trash-can me-2" />
                    <span className="ms-1 d-none d-sm-inline">Delete Car</span>
                  </NavLink>
                </li>

                <li className="w-100 nav-link mb-2 mt-2">
                  <button
                    type="button"
                    className="btn btn-danger d-none d-sm-inline fs-5"
                    onClick={() => logout()}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket me-2" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} collapse primary-color d-md-none`}
        id="navbarToggleExternalContent"
      >
        <div
          className="collapse navbar-collapse d-flex flex-column align-items-center"
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav d-flex flex-column align-items-center me-auto mt-3 mb-2 mb-lg-0 w-100">
            <li className="nav-item mb-2">
              <NavLink
                to="/home"
                className={`${styles.mobileNavLink} nav-link`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/reserve"
                className={`${styles.mobileNavLink} nav-link`}
              >
                Reserve
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/reservations"
                className={`${styles.mobileNavLink} nav-link`}
              >
                My Reservations
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/add-car"
                className={`${styles.mobileNavLink} nav-link`}
              >
                Add Car
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/delete-car"
                className={`${styles.mobileNavLink} nav-link`}
              >
                Delete Car
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <button
                type="button"
                className={`${styles.mobileNavLink} nav-link btn btn-danger`}
                onClick={() => logout()}
              >
                <i className="fa-solid fa-arrow-right-from-bracket me-2" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <nav className={`${styles.mobileNav} navbar primary-color d-md-none`}>
        <div className="container-fluid d-flex justify-content-between">
          <button
            className={styles.menuBtn}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-bars" />
            </span>
          </button>
          <h1 className={`${styles.brandName} navbar-brand fs-2 fw-semibold`}>
            Luxy Rides
          </h1>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
