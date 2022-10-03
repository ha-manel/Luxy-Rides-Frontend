import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Carousel from 'nuka-carousel/lib/carousel';
import classes from './DeleteCar.module.css';
import DeleteCarUi from './DeleteCarUi';
import './Carousel.css';

const DeleteCar = () => {
  const [cars, setCars] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/cars/${user.user.id}`)
      .then((response) => {
        setCars(response.data.car);
      });
  }, []);

  if (cars.length <= 0) {
    return (
      <h2 className="mt-5 text-center">
        You don&apos;t have any cars yet in our system.
      </h2>
    );
  }
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
          slidesToShow={1}
          renderBottomCenterControls={false}
        >

          {cars.map((car) => (
            <DeleteCarUi
              key={car.id}
              id={car.id}
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
