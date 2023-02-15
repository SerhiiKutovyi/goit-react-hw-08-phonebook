import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  fetchContacts,
  addContact,
  deleteContact,
} from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    contacts: [],
    filter: '',
    isLoading: false,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [signUp.pending]: handlePending,
    [signUp.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [signUp.rejected]: handleRejected,

    [signIn.pending]: handlePending,
    [signIn.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [signIn.rejected]: handleRejected,

    [signOut.pending]: handlePending,
    [signOut.fulfilled](state) {
      state.isLoading = false;
      state.error = null;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [signOut.rejected]: handleRejected,

    [getCurrentUser.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
    },

    [getCurrentUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.user = { name: payload.name, email: payload.email };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getCurrentUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.isRefreshing = false;
    },
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = [payload, ...state.contacts];
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.contacts = [
        ...state.contacts.filter(data => data.id !== payload.id),
      ];
    },
    [deleteContact.rejected]: handleRejected,
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const contactsReducer = persistReducer(persistConfig, userSlice.reducer);

export const { filterContacts } = userSlice.actions;
