import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const token = {
//   setAuthHeader(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   clearAuthHeader() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

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
      const { data } = await axios.post('/contacts', contact);
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
