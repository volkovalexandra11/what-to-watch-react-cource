import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getLoadedDataStatus } from '../store/main-data/selectors';
import { getMovie } from '../store/film-data/selectors';
import { fetchMovieByID } from '../store/api-action';
import Loader from '../components/Loader/loader';
import Logo from '../components/logo/logo';
import User from '../components/user/user';
import AddReviewForm from '../components/add-review-form/add-review-form';

const AddReview = () => {
  const id = Number(useParams().id);
  const movie = useAppSelector(getMovie);
  const loadStatus = useAppSelector(getLoadedDataStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieByID(id.toString()));
  }, [id, dispatch]);

  if (loadStatus) {
    return(<Loader />);
  }

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
        <AddReviewForm movieId={movie?.id}/>
      </div>
    </section>
  );
};

export default AddReview;
