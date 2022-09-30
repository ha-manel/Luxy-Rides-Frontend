import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
          <div className={styles.btncontainer}>
            <button type="button" className={styles.reservebtn}>Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CarDetails;
