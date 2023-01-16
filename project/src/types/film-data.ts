import {Film} from './film';
import {Comment} from './comment';

export type FilmData = {
  film: Film | null,
  similar: Film[],
  comments: Comment[],
  currentFilmTab: string,
  isFilmFoundStatus: boolean | null,
  isFilmLoadingStatus: boolean | null
}
