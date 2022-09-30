import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/car/${id}`)
      .then((response) => setCar(response.data.car));
  }, []);

  return (
    <>
      <h1>Car Details</h1>
      <div>
        <img src={car.picture} alt="car" />
        <p>{car.model}</p>
        <p>{car.driver_name}</p>
      </div>
    </>
  );
};
export default CarDetails;
