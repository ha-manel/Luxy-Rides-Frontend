import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './User/registerSlice';
import carsReducer from './Car/carSlice';

const store = configureStore({
  reducer: {
    user: registerReducer,
    // reservations: reservationsReducer,
    cars: carsReducer,
  },
});

export default store;
