import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <>
    <div className="container-fluid overflow-hidden d-none d-md-block">
      <div className="row vh-100 overflow-auto">
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
          <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
            <a href="sign" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5">
                Luxy Rides
              </span>
            </a>
            <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link px-sm-0 px-2">
                  <i className="fa-solid fa-house me-2" />
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/reserve" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                  <i className="fa-solid fa-car-side me-2" />
                  <span className="ms-1 d-none d-sm-inline">Reserve</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/reservations" className="nav-link px-sm-0 px-2">
                  <i className="fa-solid fa-calendar-days me-2" />
                  <span className="ms-1 d-none d-sm-inline">My Reservations</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-car" className="nav-link px-sm-0 px-2">
                  <i className="fa-solid fa-plus me-2" />
                  <span className="ms-1 d-none d-sm-inline">Add Car</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/delete-car" className="nav-link px-sm-0 px-2">
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
