import React, { useState } from 'react';
import ReservationCars from './ReservationCars';
import styles from './Reserve.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Reserve = () => {
  const [date, setDate] = useState('');
  const [cars, setCars] = useState([]);

  const findCars = (e) => {
    e.preventDefault();
    if (date) {
      fetch(`http://localhost:3000/api/v1/reserve/cars/${date}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((cars) => (<ReservationCars cars={cars} date={date} />));
    }
  };

  return (
    <div
      className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center`}
    >
      <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a car</h2>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Pull up in a fancy car for your next big event!
      </p>
      <form
        className={`${styles.zindex} d-flex justify-content-around mb-5 align-items-end`}
        onSubmit={findCars}
      >
        <div>
          <label htmlFor="city" className="form-label text-white ms-3">
            Your city:
          </label>
          <input
            id="city"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="text"
            placeholder="City"
            aria-label=".form-control-lg example"
          />
        </div>
        <div>
          <label htmlFor="date" className="form-label text-white ms-3">
            Reservation date:
          </label>
          <input
            id="date"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="date"
            placeholder="Date"
            aria-label=".form-control-lg example"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Reserve;
