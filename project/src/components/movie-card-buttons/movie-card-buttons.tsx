import React from 'react';
import { Link } from 'react-router-dom';
import { TMovie } from '../../types/TMovie';
import { AuthStatus } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteCount } from '../../store/main-data/selectors';
import { changeMovieStatusToView } from '../../store/api-action';
import { setFavoriteCount } from '../../store/main-data/main-data';
import { MovieStatus } from '../../types/movie-status';

type FilmCardButtonsProps = {
  film: TMovie;
  authStatus: AuthStatus;
}

function FilmCardButtons({ film, authStatus }: FilmCardButtonsProps): JSX.Element {
  const favoriteCount = useAppSelector(getFavoriteCount);
  const dispatch = useAppDispatch();

  const onAddFavoriteClick = () => {
    const filmStatus: MovieStatus = {
      filmId: film?.id || NaN,
      status: film?.isFavorite ? 0 : 1
    };

    dispatch(changeMovieStatusToView(filmStatus));

    if (film?.isFavorite) {
      dispatch(setFavoriteCount(favoriteCount - 1));
    } else {
      dispatch(setFavoriteCount(favoriteCount + 1));
    }
  };

  return (
    <div className="film-card__buttons">
      <Link
        to={`/player/${film.id}`}
        className='btn btn--play film-card__button'
      >
        <svg viewBox="0 0 19 19"
          width="19"
          height="19"
        >
          <use xlinkHref="#play-s"></use>
        </svg>
        <span> Play </span>
      </Link>
      <Link
        className='btn btn--list film-card__button'
        to={'/mylist'}
        onClick={onAddFavoriteClick}
      >
        {
          film?.isFavorite ? <span>✓</span> :
            <svg
              viewBox="0 0 19 20"
              width="19"
              height="20"
            >
              <use xlinkHref="#add"></use>
            </svg>
        }
        <span>Mylist </span>
        <span className="film-card__count"> {favoriteCount} </span>
      </Link>
      {authStatus === AuthStatus.Auth &&
        <Link to={'review'} className="btn film-card__button" type='button'>Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
