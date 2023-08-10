import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './createSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
