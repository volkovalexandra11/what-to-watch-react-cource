import { store } from '../store';
import { TMovie } from './TMovie';

export type AppState = {
  films: Array<TMovie>;
  activeGenre: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
