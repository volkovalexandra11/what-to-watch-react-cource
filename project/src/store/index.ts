import { configureStore } from '@reduxjs/toolkit';
import { initialState, reducer } from './reducer';

export const store = configureStore({
  preloadedState: initialState,
  reducer: reducer,
})
