import { TMovie } from './TMovie';
import { TComment } from './TComment';

export type TMovieData = {
  movie: TMovie | null,
  similar: TMovie[],
  comments: TComment[],
  currentMovieTab: string,
  isMovieFound: boolean | null,
  isMovieLoading: boolean | null
}
