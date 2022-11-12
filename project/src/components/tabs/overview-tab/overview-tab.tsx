import { FC } from 'react';
import { TMovie } from '../../../types/TMovie';

type Props = {
  movie: TMovie;
}

const MovieOverviewTab: FC<Props> = (props) => {
  const { movie } = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {movie.description}
        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {movie.starring.join(',')} and other</strong></p>
      </div>
    </>
  );
};

export default MovieOverviewTab;
