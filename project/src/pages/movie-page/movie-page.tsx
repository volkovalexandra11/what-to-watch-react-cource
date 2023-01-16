import React, {useEffect} from 'react';

import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import Logo from '../../components/logo/logo';
import {Navigate, useParams} from 'react-router-dom';
import FilmDescription from '../../components/film-description/film-description';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  fetchCommentsByID,
  fetchFavoriteFilmsAction,
  fetchFilmByID,
  fetchSimilarByID
} from '../../store/api-actions';
import Loading from '../loading/loading';
import {AuthorizationStatus} from '../../const';
import UserBlock from '../../components/user-block/user-block';
import {getFilm, getIsFilmFoundStatus, getIsFilmLoadingStatus, getSimilar} from '../../store/film-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {changeFilmTab} from '../../store/film-data/film-data';
import {FilmTabs} from '../../types/film-tabs';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

function MoviePage(): JSX.Element{

  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const similar = useAppSelector(getSimilar);

  useEffect(() => {
    dispatch(changeFilmTab(FilmTabs.Overview));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [id, dispatch, authStatus]);

  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);
  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);

  if (isFilmLoadingStatus) {
    return(<Loading />);
  }

  if (!isFilmFoundStatus) {
    return <Navigate to={'/notfound'}/>;
  }

  return(
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film!.backgroundImage} alt={film!.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film!.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film!.genre}</span>
                <span className="film-card__year">{film!.released}</span>
              </p>

              <FilmCardButtons film={film!} authStatus={authStatus}/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film!.posterImage} alt={film!.name}
                width="218" height="327"
              />
            </div>
            <FilmDescription />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Catalog films={similar}/>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default MoviePage;

