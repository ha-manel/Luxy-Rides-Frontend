import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCarDetail } from '../../Redux/Car/carDetail';
import styles from './Car.module.css';
import driver from '../../assets/images/driver.png';
// import classes from './Details.module.css';

const CarDetails = () => {
  const detail = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    dispatch(getCarDetail(id));
  }, []);

  return (
    <>
      {detail.map((car) => (
        <div className={styles.carCnt} key={id}>
          <div className={styles.imgCnt}>
            <img src={car.picture} alt={car.model} className={styles.carImg} />
          </div>
          <div className="model-detail d-flex flex-column justify-content-center align-items-center">
            <h3 className="h4 mt-3">{car.model}</h3>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2 mt-2">
              <img src={driver} alt={car.driver_name} className={styles.driverImg} />
              <h5 className="h6 pt-1">{car.driver_name}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarDetails;
