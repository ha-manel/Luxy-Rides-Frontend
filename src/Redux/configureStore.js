import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './User/registerSlice';
import carsReducer from './Car/carSlice';
import carReducer from './Car/carDetail';

const store = configureStore({
  reducer: {
    user: registerReducer,
    // reservations: reservationsReducer,
    cars: carsReducer,
    car: carReducer,
  },
});

export default store;
