import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Navigation from '../components/movie-page/navigation/navigation';
import Rating from '../components/movie-page/rating/rating';
import MovieDescription from '../components/movie-page/movie-description/movie-description';
import MovieMeta from '../components/movie-page/movie-meta/movie-meta';
import MovieButtons from '../components/movie-page/movie-buttons/movie-buttons';
import Header from '../components/header/header';
import MovieCatalog from '../components/movie-page/movie-catalog/movie-catalog';
import Poster from '../components/movie-page/poster/poster';
import { getMovieById, movies } from '../mocks/movies';

const Movie = () => {
  const { movieId } = useParams();
  const movie = getMovieById(Number(movieId));
  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={movie.posterImage} alt={movie.name}/>
          </div>

          <h1 className='visually-hidden'>WTW</h1>
          <Header/>
          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <MovieMeta movieName={movie.name} movieGenre={movie.genre} movieCreationDate={movie.released}/>
              <MovieButtons/>
              <Link to={`/films/${movie?.id}/review`} className='btn film-card__button'>Add review</Link>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <Poster/>
            <div className='film-card__desc'>
              <Navigation/>
              <Rating/>
              <MovieDescription
                description='Gustave prides himself on providing first-class service to the hotel`&apos;`s guests, including satisfying the
            sexual needs of the many elderly women who stay there. When one of Gustave`&apos;`s lovers dies mysteriously,
            Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.'
                director={movie.director}
                starring={movie.starring.join(' ')}
                summary={movie.description}
              />
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>
          <MovieCatalog movieList={movies.filter((m) => m.genre === movie.genre)}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Movie;
