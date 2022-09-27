/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './DeleteCar.module.css';

const DeleteCarUi = ({
  id, image, model, driver_name,

}) => (
  <div className={classes.carCnt} key={id}>
    <div className={classes.imgCnt}>
      <img src={image} alt={model} className={classes.carImg} />
    </div>
    <div className="model-detail d-flex flex-column justify-content-center align-items-center">
      <h3 className="h4 mt-3">{model}</h3>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
        <h5 className="h6 pt-1">{driver_name}</h5>
      </div>
    </div>
  </div>
);

DeleteCarUi.propTypes = {
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  driver_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteCarUi;
