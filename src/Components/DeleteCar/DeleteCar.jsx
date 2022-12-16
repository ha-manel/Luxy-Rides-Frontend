import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CarCard from './CarCard';

const DeleteCar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://luxy-rides.onrender.com/api/v1/cars/${user.user.id}`)
      .then((response) => {
        setCars(response.data.cars);
        setLoading(false);
      });
  }, []);

  if (cars.length <= 0) {
    if (loading) {
      return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
          <i className="fa-solid fa-spinner fa-spin fs-1" />
        </div>
      );
    }
    return (
      <h2 className="mt-5 text-center">
        You don&apos;t have any cars in our system yet.
      </h2>
    );
  }
  return (
    <>
      <h2 className="h2 text-center mt-5 text-uppercase">
        <strong>WELCOME TO THE DELETE AREA</strong>
      </h2>
      <p className="text-center text-muted mb-5">
        Please click on delete button below to delete a car
      </p>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            image={car.picture}
            model={car.model}
            driver_name={car.driver_name}
            cars={cars}
            setCars={setCars}
          />
        ))}
      </div>
    </>
  );
};
export default DeleteCar;
