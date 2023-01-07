import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Navigation from '../components/movie-page/navigation/navigation';
import Rating from '../components/movie-page/rating/rating';
import MovieDescription from '../components/movie-page/movie-description/movie-description';
import MovieMeta from '../components/movie-page/movie-meta/movie-meta';
import MovieButtons from '../components/movie-page/movie-buttons/movie-buttons';
import Header from '../components/header/header';
import Poster from '../components/movie-page/poster/poster';
import Catalog from '../components/catalog/catalog';
import { useAppDispatch, useAppSelector } from '../hooks';
import { TMovie } from '../types/TMovie';
import { getMovie, getSimilarMovies } from '../helpers/api_functions';
import { AppRoute, AuthStatus } from '../constants/constants';
import { redirect } from '../store/action';

const Movie = () => {
  const params = useParams();
  const movieId = Number(params.filmId);

  const [movie, setMovie] = useState<TMovie>();
  const [sameMovies, setSameMovies] = useState<TMovie[]>([]);

  const dispatch = useAppDispatch();

  const { authStatus } = useAppSelector((state) => state);

  useEffect(() => {
    getMovie(movieId).then(({ data }) => {
      if (data) {
        setMovie(data);
      } else {
        dispatch(redirect(AppRoute.ERROR404));
      }
    });
    getSimilarMovies(movieId).then(({ data }) => setSameMovies(data));
  }, [movieId]);

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
                  ? <Link to={`/films/${movie.id}/review`} className="btn film-card__button">Add review</Link>
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
                description='Gustave prides himself on providing first-class service to the hotel`&apos;`s guests, including satisfying the
            sexual needs of the many elderly women who stay there. When one of Gustave`&apos;`s lovers dies mysteriously,
            Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.'
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
          <Catalog movieList={sameMovies}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default Movie;
