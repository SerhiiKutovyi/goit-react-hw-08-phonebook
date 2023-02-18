import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  setAuthHeader(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clearAuthHeader() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

//TODO user operation

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.setAuthHeader(data.token);
      return data;
    } catch (event) {
      Notify.failure('Something went wrong');
      return thunkAPI.rejectWithValue(event.code);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.setAuthHeader(data.token);
      return data;
    } catch (event) {
      Notify.failure(event.message);
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (userData, thunkAPI) => {
    try {
      await axios.post('/users/logout', userData);
      token.clearAuthHeader();
    } catch (event) {
      Notify.failure(event.message);
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // Notify.failure('Unable to fetch user');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (event) {
      Notify.failure(event.message);
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);
