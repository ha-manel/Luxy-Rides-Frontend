import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../Redux/Car/carSlice';
import classes from './DeleteCar.module.css';
import DeleteCarUi from './DeleteCarUi';

const DeleteCar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  const carInfo = useSelector((state) => state.cars);

  //   const deleteCarHandler = (id) => {
  //     dispatch(cancelRocket(id));
  //   };

  return (
    <>
      <h1 className={classes.title}>Welcome to the delete Car Page</h1>

      {carInfo.cars.map((car) => (
        <DeleteCarUi
          key={car.id}
          image={car.picture}
          model={car.model}
          driver_name={car.driver_name}
          user_id={car.user_id}
        />
      ))}
    </>
  );
};
export default DeleteCar;
