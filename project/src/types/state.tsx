import { store } from '../store';
import { AuthStatus } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authStatus: AuthStatus;
  avatar: string | null;
  userId: number | null;
};
