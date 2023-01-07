import { Link, useParams } from 'react-router-dom';
import Logo from '../components/logo/logo';
import AddReviewForm from '../components/add-review-form/add-review-form';
import { useAppDispatch, useAppSelector } from '../hooks';
import User from '../components/user/user';
import { TMovie } from '../types/TMovie';
import { useEffect, useState } from 'react';
import { AppRoute } from '../constants/constants';
import { getMovie } from '../helpers/api_functions';
import { redirect } from '../store/action';

const AddReview = () => {
  const params = useParams();
  const movieId = Number(params.filmId);

  const { movieList } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [movie, setMovie] = useState<TMovie | null>();

  useEffect(() => {
    getMovie(movieId).then(({ data }) => {
      if (data) {
        setMovie(data);
      } else {
        dispatch(redirect(AppRoute.ERROR404));
      }
    });
  }, [movieId]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={movie?.posterImage} alt={movie?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie?.id}`} className="breadcrumbs__link">{movie?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie?.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <User/>
        </header>
      </div>
      <div className="film-card__poster film-card__poster--small">
        <img src={movie?.posterImage} alt={movie?.name} width="218" height="327"/>
      </div>

      <div className="add-review">
        <AddReviewForm movieId={movieId}/>
      </div>

    </section>
  );
}

export default AddReview;
