import { store } from '../store';
import { TMovie } from './TMovie';
import { AuthStatus } from '../constants/constants';
import { TUser } from './TUser';

export type AppState = {
  movieList: Array<TMovie>;
  activeGenre: string;
  isMoviesLoaded: boolean,
  authStatus: AuthStatus,
  user: TUser | null,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
