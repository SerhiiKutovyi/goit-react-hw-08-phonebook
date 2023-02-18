import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { signUp, signIn, signOut, getCurrentUser } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [signUp.pending]: handlePending,
    [signUp.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.user = payload;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [signUp.rejected]: handleRejected,

    [signIn.pending]: handlePending,
    [signIn.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.user = payload.user;
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
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getCurrentUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      state.isRefreshing = false;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
