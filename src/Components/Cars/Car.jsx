/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Car.module.css';
import driver from '../../assets/images/driver.png';

const Car = ({
  id, model, picture, driver_name,
}) => (
  <NavLink className={styles.links} to={`/car/${id}`}>
    <div className={styles.carCnt} key={id}>
      <div className={styles.imgCnt}>
        <img src={picture} alt={model} className={styles.carImg} />
      </div>
      <div className="model-detail d-flex flex-column justify-content-center align-items-center">
        <h3 className="h4 mt-3">{model}</h3>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
          <img src={driver} alt={driver_name} className={styles.driverImg} />
          <h5 className="h6 pt-1">{driver_name}</h5>
        </div>
      </div>
    </div>
  </NavLink>
);

export default Car;
