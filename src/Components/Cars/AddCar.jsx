/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from './AddCar.module.css';

const AddCar = () => {
  const [model, setModel] = useState('');
  const [driver_name, setDriverName] = useState('');
  const [price, setPrice] = useState('');
  const [picture, setPicture] = useState('');
  const user = useSelector((state) => state.user);

  const submitCar = (e) => {
    e.preventDefault();
    const car = {
      user_id: user.user.id, model, driver_name, picture, price,
    };

    axios.post('http://localhost:3000/api/v1/car', car);

    setModel('');
    setDriverName('');
    setPicture('');
  };

  return (
    <div
      className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center`}
    >
      <h2 className={`${styles.zindex} fs-1 text-white`}>Add Car</h2>
      <p className={`${styles.zindex} fs-5 text-white text-center`}>
        You got a fancy car from which you wanna make some extra bucks $? Add it on our website!
      </p>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Fill the details of your car.
      </p>
      <form
        className={`${styles.zindex} ${styles.form} d-flex justify-content-around mb-5 align-items-end`}
        onSubmit={submitCar}
      >
        <div>
          <label htmlFor="model" className="form-label text-white ms-3">
            Model:
          </label>
          <input
            id="model"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="text"
            placeholder="Model"
            aria-label=".form-control-lg example"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="driverName" className="form-label text-white ms-3">
            Driver&apos;s name:
          </label>
          <input
            id="driverName"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="text"
            placeholder="Driver's Name"
            aria-label=".form-control-lg example"
            value={driver_name}
            onChange={(e) => setDriverName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="form-label text-white ms-3">
            Price per day:
          </label>
          <input
            id="price"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="number"
            placeholder="Price"
            aria-label=".form-control-lg example"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="picture" className="form-label text-white ms-3">
            Picture:
          </label>
          <input
            id="picture"
            className={`${styles.input} form-control form-control-lg px-4 mx-2`}
            type="text"
            placeholder="Picture Link"
            aria-label=".form-control-lg example"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCar;
