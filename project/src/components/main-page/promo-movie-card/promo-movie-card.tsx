import { FC } from 'react';
import { TMovie } from '../../../types/TMovie';
import Header from '../../header/header';
import MovieCardButtons from '../../movie-card-buttons/movie-card-buttons';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';

type Props = {
  movie: TMovie;
}

export const PromoFilmCard: FC<Props> = ({ movie }) => {
  const authStatus = useAppSelector(getAuthorizationStatus);
  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src={`${movie.backgroundImage}`} alt={movie.name}/>
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <Header/>

      <div className='film-card__wrap'>
        <div className='film-card__info'>
          <div className='film-card__poster'>
            <img src={`${movie.posterImage}`} alt={movie.name} width='218' height='327'/>
          </div>

          <div className='film-card__desc'>
            <h2 className='film-card__title'>{movie.name}</h2>
            <p className='film-card__meta'>
              <span className='film-card__genre'>{movie.genre}</span>
              <span className='film-card__year'>{movie.released}</span>
            </p>

            <MovieCardButtons film={movie} authStatus={authStatus}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoFilmCard;
