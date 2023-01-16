import { TComment } from './TComment';
import { TMovie } from './TMovie';

export type TMovieData = {
  film: TMovie | null;
  similar: TMovie[];
  comments: TComment[];
  currentFilmTab: string;
  isFilmFoundStatus: boolean | null;
  isFilmLoadingStatus: boolean | null;
}
