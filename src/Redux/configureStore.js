import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './User/registerSlice';

const store = configureStore({
  reducer: {
    user: registerReducer,
    // reservations: reservationsReducer,
    // cars: carsReducer,
  },
});

export default store;
