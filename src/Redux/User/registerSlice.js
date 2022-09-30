import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  logged_in: false,
  error: null,
};

export const register = createAsyncThunk(
  'user/register',
  ({ email, name, username }) => {
    const result = axios
      .post(
        `http://localhost:3000/api/v1/register/${username}/${name}/${email}`,
      )
      .then((response) => response.data);
    return result;
  },
);

export const login = createAsyncThunk('user/login', (username) => {
  const result = axios
    .get(`http://localhost:3000/api/v1/login/${username}`)
    .then((response) => response.data);
  return result;
});

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [register.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [login.fulfilled]: (state, action) => ({
      ...state,
      user: action.payload.user,
      logged_in: action.payload.logged_in,
      error: action.payload.error,
    }),
    [login.rejected]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});

export default registerSlice.reducer;
