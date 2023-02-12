import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { nanoid } from 'nanoid';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },

    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        data => data.id !== action.payload
      );
    },

    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(persistConfig, userSlice.reducer);

export const { addContacts, deleteContacts, filterContacts } =
  userSlice.actions;
