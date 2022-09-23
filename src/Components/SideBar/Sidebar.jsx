import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <>
    <div className="container-fluid overflow-hidden d-none d-md-block">
      <div className="row vh-100 overflow-auto">
        <div
          className={`${styles.navbarContainer} col-12 col-sm-3 col-xl-2 d-flex sticky-top pt-5`}
        >
          <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start text-white">
            <NavLink
              to="/home"
              className="d-flex align-items-center pb-sm-3 mb-3 me-md-auto text-decoration-none"
            >
              <span className={`${styles.brandName} fs-1 ps-3`}>
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
                <NavLink to="/reserve" className="nav-link mb-2 fs-5">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Sidebar;
