import { configureStore } from '@reduxjs/toolkit';
import { initialState, globalReducer } from './globalReducer';

export const store = configureStore({
  preloadedState: initialState,
  reducer: globalReducer,
})
