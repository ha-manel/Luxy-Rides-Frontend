import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './carDetails.module.css';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/car/${id}`)
      .then((response) => setCar(response.data.car));
  }, []);

  return (
    <>
      <h2 className={styles.title}>CAR DETAILS</h2>
      <div className={styles.detailContainer}>
        <div className={styles.car}>
          <img src={car.picture} alt={car.model} />
        </div>
        <div className={styles.detail}>
          <h2>{car.model}</h2>
          <div className={styles.carDriver}>
            <p>Driver Name:</p>
            <p>{car.driver_name}</p>
          </div>
          <div className={styles.price}>
            <p>Price Per Day: </p>
            <p className={styles.priceColor}>
              $
              {car.price}
            </p>
          </div>
          <NavLink to={`/reserve/${id}`} className={styles.btncontainer}>
            <button type="button" className={styles.reservebtn}>
              <i className="fa-solid fa-car-side me-3" />
              Reserve
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default CarDetails;
