import React from 'react';
import styles from './Reserve.module.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Reserve = () => (
  <div
    className={`${styles.cnt} container-fluid vh-100 d-flex flex-column justify-content-center align-items-center`}
  >
    <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a car</h2>
    <hr className={styles.hr} />
    <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
      Pull up in a fancy car for your next big event!
    </p>
    <form
      className={`${styles.zindex} w-50 d-flex justify-content-around mt-2 mb-5`}
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          className={`${styles.input} form-control px-4`}
          id="floatingInput"
          placeholder="Madrid"
        />
        <label htmlFor="floatingInput" className={`${styles.label} px-4`}>
          Your city
        </label>
      </div>
      <div className="form-floating">
        <input
          type="date"
          className={`${styles.input} form-control px-4`}
          id="floatingPassword"
          placeholder="Date"
        />
        <label htmlFor="floatingPassword" className={`${styles.label} px-4`}>
          Date
        </label>
      </div>
      <button type="submit" className={`${styles.btn} btn px-4 h-75`}>
        Reserve
      </button>
    </form>
  </div>
);

export default Reserve;
