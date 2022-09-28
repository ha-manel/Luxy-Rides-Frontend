import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  car: [],
};

export const getCarDetail = createAsyncThunk('car/getCarDetail', async (id) => {
  const result = fetch(
    `http://localhost:3000/api/v1/cars/${id}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((response) => response.json());
  return result;
});

export const carDetailSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: {

    [getCarDetail.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload.cars,
    }),
  },
});

export default carDetailSlice.reducer;
