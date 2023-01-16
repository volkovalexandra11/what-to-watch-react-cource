import { store } from '../store';
import { AuthStatus } from '../constants/constants';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthStatus;
  avatar: string | null;
  userId?: number | null;
};
