/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
// import classes from './DeleteCar.module.css';

const DeleteCarUi = ({
  image, model, driver_name, user_id,

}) => (
  <section className="car">
    <div>
      <img src={image} alt={image} />
    </div>
    <div>{model}</div>
    <div>{driver_name}</div>
    <div>{user_id}</div>
  </section>
);

DeleteCarUi.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  driver_name: PropTypes.string.isRequired,
  user_id: PropTypes.number.isRequired,
};

export default DeleteCarUi;
