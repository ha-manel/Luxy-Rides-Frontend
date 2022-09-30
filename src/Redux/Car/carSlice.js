import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cars: [],
};

export const getCars = createAsyncThunk('car/getCars', () => {
  const result = axios
    .get('http://localhost:3000/api/v1/cars')
    .then((response) => response.data);
  return result;
});

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [getCars.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload.cars,
    }),
  },
});

export default carSlice.reducer;
