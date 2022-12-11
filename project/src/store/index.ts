import { configureStore } from '@reduxjs/toolkit';
import { initialState, globalReducer } from './globalReducer';
import { createAPI } from '../services/api';

const api = createAPI();

export const store = configureStore({
  preloadedState: initialState,
  reducer: globalReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
})
