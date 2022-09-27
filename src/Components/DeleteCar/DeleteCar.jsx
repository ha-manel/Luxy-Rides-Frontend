import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'nuka-carousel/lib/carousel';
import { getCars } from '../../Redux/Car/carSlice';
import classes from './DeleteCar.module.css';
import DeleteCarUi from './DeleteCarUi';
import './Carousel.css';

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
      <h2 className="h2 text-center mt-5 text-uppercase"><strong>WELCOME TO THE DELETE AREA</strong></h2>
      <p className="text-center text-muted mb-5">Please click on delete button below to delete a car</p>
      <div className={classes.title}>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button type="button" onClick={previousSlide}>
              <i className="fa-solid fa-caret-left" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button type="button" onClick={nextSlide}>
              <i className="fa-solid fa-caret-right" />
            </button>
          )}
          className="car-carousel"
          wrapAround
          slidesToShow={3}
          renderBottomCenterControls={false}
        >

          {carInfo.cars.map((car) => (
            <DeleteCarUi
              key={car.id}
              image={car.picture}
              model={car.model}
              driver_name={car.driver_name}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default DeleteCar;
