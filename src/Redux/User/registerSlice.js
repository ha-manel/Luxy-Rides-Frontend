import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  logged_in: false,
  error: null,
};

export const register = createAsyncThunk(
  'user/register',
  async ({ email, name, username }) => {
    const result = await fetch(
      `http://localhost:3000/api/v1/register/${username}/${name}/${email}`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then((response) => response.json());
    console.log(result);
    return result;
  },
);

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
  },
});

export default registerSlice.reducer;
