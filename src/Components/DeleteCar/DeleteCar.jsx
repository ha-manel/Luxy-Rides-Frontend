import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DeleteCarUi from './DeleteCarUi';

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
      <h2 className="h2 text-center mt-5 text-uppercase">
        <strong>WELCOME TO THE DELETE AREA</strong>
      </h2>
      <p className="text-center text-muted mb-5">
        Please click on delete button below to delete a car
      </p>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {cars.map((car) => (
          <DeleteCarUi
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
