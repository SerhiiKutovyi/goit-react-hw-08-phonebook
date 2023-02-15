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
  'contacts/signUp',
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
  'contacts/signIn',
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
  'contacts/signOut',
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
  'contacts/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

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

//TODO contacts operation
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data.reverse();
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { ...contact });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
