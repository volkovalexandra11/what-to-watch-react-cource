import React, {useEffect} from 'react';
import Logo from '../../components/logo/logo';
import {Link, Navigate, useParams} from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';
import {useAppDispatch, useAppSelector} from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import {getFilm} from '../../store/film-data/selectors';
import {getLoadedDataStatus} from '../../store/main-data/selectors';
import Loading from '../loading/loading';
import {fetchFilmByID} from '../../store/api-actions';

function AddReview(): JSX.Element{
  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const loadStatus = useAppSelector(getLoadedDataStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  if (loadStatus) {
    return(<Loading />);
  }

  if (!film) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo/>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link className="breadcrumbs__link" to={`/films/${id}/review`}>
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={film.posterImage} alt={film.name}
            width='218' height='327'
          />
        </div>
      </div>

      <ReviewForm/>

    </section>
  );
}

export default AddReview;
