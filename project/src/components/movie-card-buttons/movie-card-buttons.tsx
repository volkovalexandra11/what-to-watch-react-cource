import { Link } from 'react-router-dom';
import { AuthStatus } from '../../const';
import { TMovie } from '../../types/TMovie';
import { TMovieStatus } from '../../types/t-movie-status';
import { changeFilmStatusToView } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteCount } from '../../store/main-data/selectors';
import { FC } from 'react';

type Props = {
  movie: TMovie,
  authStatus: AuthStatus
}

const MovieCardButtons: FC<Props> = (props) => {
  const { movie, authStatus } = props;
  const favoriteCount = useAppSelector(getFavoriteCount);
  const dispatch = useAppDispatch();

  const onAddFavoriteClick = () => {
    const movieStatus: TMovieStatus = {
      movieId: movie?.id || NaN,
      status: movie?.isFavorite ? 0 : 1
    };

    dispatch(changeFilmStatusToView(movieStatus));
  };

  return (
    <div className="film-card__buttons">
      <Link
        to={`/player/${movie.id}`}
        className='btn btn--play film-card__button'
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {
        authStatus === AuthStatus.Auth &&
        <button
          className="btn btn--list film-card__button"
          type="button"
          onClick={onAddFavoriteClick}
        >
          {
            movie?.isFavorite ?
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#in-list"></use>
              </svg> :
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
          }
          <span>My list</span>
          <span className="film-card__count">{favoriteCount}</span>
        </button>
      }
      {authStatus === AuthStatus.Auth &&
        <Link to={'review'} className="btn film-card__button" type='button'>Add review</Link>}
    </div>
  );
};

export default MovieCardButtons;
