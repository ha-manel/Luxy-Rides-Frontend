import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarDetail } from '../../Redux/Car/carSlice';

const CarDetails = () => {
  const dispatch = useDispatch();
  useEffect((id) => {
    dispatch(getCarDetail(id));
  }, [dispatch]);
  const Car = useSelector((state) => state.car);

  return (
    <>
      <h1>CarDetails</h1>
      <div>
        {Car}
      </div>
    </>
  );
};

export default CarDetails;
