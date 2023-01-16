import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './globalReducer';
import { createAPI } from '../services/api-service';

export const api = createAPI();

export const store = configureStore({
  reducer: globalReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});
