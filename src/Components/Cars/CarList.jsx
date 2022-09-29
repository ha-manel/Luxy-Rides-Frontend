import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'nuka-carousel/lib/carousel';
import { getCars } from '../../Redux/Car/carSlice';
import Car from './Car';
import './Carousel.css';

const CarList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  const Cars = useSelector((state) => state.cars);
  return (
    <>
      <h2 className="h2 text-center mt-5 text-uppercase"><strong>Latest Cars</strong></h2>
      <p className="text-center text-muted mb-5">Please select a car from below to reserve</p>
      <div>
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
          {Cars.cars.map((car) => (

            <Car
              key={car.id}
              id={car.id}
              model={car.model}
              picture={car.picture}
              driver_name={car.driver_name}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CarList;
