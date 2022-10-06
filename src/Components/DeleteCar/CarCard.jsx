/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './DeleteCar.module.css';

const DeleteCarUi = ({
  id, image, model, driver_name, cars, setCars,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const removeCar = (id) => {
    axios
      .delete(`https://luxy-rides-api.herokuapp.com/api/v1/car/${id}`)
      .then(() => {
        let filteredCars = [];
        filteredCars = cars.filter((car) => car.id !== id);
        setCars(filteredCars);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  return (
    <>
      <p className={`${styles.errorMsg} fs-5`}>{errorMessage}</p>
      <section className={`${styles.carCnt} mx-4`} key={id}>
        <div className={styles.imgCnt}>
          <img src={image} alt={model} className={styles.carImg} />
        </div>
        <div className="model-detail d-flex flex-column justify-content-center align-items-center">
          <h3 className="h4 mt-3">{model}</h3>
          <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
            <h5 className="h6 pt-1">{driver_name}</h5>
          </div>
        </div>
        <button
          type="button"
          onClick={() => removeCar(id)}
          className="btn btn-danger mb-3"
        >
          Delete
        </button>
      </section>
    </>
  );
};

DeleteCarUi.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  driver_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cars: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  setCars: PropTypes.func.isRequired,
};

export default DeleteCarUi;
