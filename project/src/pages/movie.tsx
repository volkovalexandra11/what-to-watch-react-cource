import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Navigation from '../components/movie-page/navigation/navigation';
import Rating from '../components/movie-page/rating/rating';
import MovieDescription from '../components/movie-page/movie-description/movie-description';
import MovieMeta from '../components/movie-page/movie-meta/movie-meta';
import MovieButtons from '../components/movie-page/movie-buttons/movie-buttons';
import Header from '../components/header/header';
import Poster from '../components/movie-page/poster/poster';
import Catalog from '../components/catalog/catalog';
import Loader from '../components/Loader/loader';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AuthStatus } from '../constants/constants';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { fetchCommentsByID, fetchFavoriteMoviesAction, fetchMovieByID, fetchSimilarByID } from '../store/api-action';
import { getIsMovieFoundStatus, getIsMovieLoadingStatus, getMovie, getSimilar } from '../store/film-data/selectors';
import { FilmTabs } from '../types/film-tabs';
import { changeFilmTab } from '../store/film-data/film-data';
import { setIsDataLoaded } from '../store/main-data/main-data';

const Movie = () => {
  const id = Number(useParams().id);
  const movie = useAppSelector(getMovie);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const loadStatus = useAppSelector(getIsMovieLoadingStatus);
  const isFilmFoundStatus = useAppSelector(getIsMovieFoundStatus);
  const dispatch = useAppDispatch();
  const similar = useAppSelector(getSimilar);

  useEffect(() => {
    dispatch(setIsDataLoaded(true));
    dispatch(changeFilmTab(FilmTabs.Overview));
    dispatch(fetchMovieByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoriteMoviesAction());
    }

    dispatch(setIsDataLoaded(false));
  }, [id, dispatch, authStatus]);

  if (loadStatus) {
    return (<Loader/>);
  }

  if (!isFilmFoundStatus) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={movie?.posterImage} alt={movie?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <MovieMeta movieName={movie?.name} movieGenre={movie?.genre} movieCreationDate={movie?.released}/>
              <MovieButtons/>
              {
                authStatus === AuthStatus.Auth
                  ? <Link to={`/films/${movie?.id}/review`} className="btn film-card__button">Add review</Link>
                  : null
              }
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster/>
            <div className="film-card__desc">
              <Navigation/>
              <Rating/>
              <MovieDescription
                director={movie?.director}
                starring={movie?.starring.join(' ')}
                summary={movie?.description}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Catalog movieList={similar}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Movie;
