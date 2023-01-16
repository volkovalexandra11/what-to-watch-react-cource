import React, {useEffect} from 'react';

import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Logo from '../../components/logo/logo';
import GenresFilter from '../../components/genres-filter/genres-filter';
import ShowMore from '../../components/show-more/show-more';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {getCardCount, getFilteredFilms, getPromo} from '../../store/main-data/selectors';
import UserBlock from '../../components/user-block/user-block';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

function Main(): JSX.Element{
  const promoMovie = useAppSelector(getPromo);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);
  const films = useAppSelector(getFilteredFilms);
  const cardCount = useAppSelector(getCardCount);

  if (!promoMovie) {
    return <section className="film-card"></section>;
  }

  return (
    <React.Fragment>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={promoMovie.backgroundImage} alt={promoMovie.name}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <Logo/>
          <UserBlock/>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img src={promoMovie.posterImage} alt={promoMovie.name}
                width='218' height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{promoMovie.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{promoMovie.genre}</span>
                <span className='film-card__year'>{promoMovie.released}</span>
              </p>

              <FilmCardButtons film={promoMovie} authStatus={authStatus}/>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>
          <GenresFilter/>
          <Catalog films={films.slice(0, cardCount)}/>
          {cardCount !== films.length && <ShowMore/>}
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Main;
