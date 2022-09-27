import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};

export const getCars = createAsyncThunk(
  'car/getCars',
  () => {
    const result = fetch(
      'http://localhost:3000/api/v1/cars',
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then((response) => response.json());
    return result;
  },
);

// export const deleteCar = createAsyncThunk(
//   'car/deleteCar',
//   () => {
//     const resultCar = fetch(
//       `http://localhost:3000/api/v1/cars/${id}`,
//       {
//         method: 'delete',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     ).then((response) => response.json());
//     return resultCar;
//   },
// );

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {

    [getCars.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload.cars,
    }),

    // [deleteCar.fulfilled]: (state, action) => ({
    //   ...state,
    //   cars: action.payload.cars,
    // }),
  },
});

export default carSlice.reducer;
