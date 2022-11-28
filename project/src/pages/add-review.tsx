import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../components/logo/logo';
import AddReviewForm from "../components/add-review-form/add-review-form";
import { getMovieById } from '../helper';
import { useAppSelector } from '../hooks';
import User from '../components/user/user';

const AddReview = () => {
  const { movieId } = useParams();

  const { movieList } = useAppSelector((state) => state);

  const movie = getMovieById(movieList, Number(movieId));

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie.posterImage} alt={movie.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie?.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <User/>
        </header>
      </div>
      <div className="film-card__poster film-card__poster--small">
        <img src={movie.posterImage} alt={movie.name} width="218" height="327"/>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>

    </section>
  );
}

export default AddReview;
