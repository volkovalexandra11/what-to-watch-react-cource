import React, {useEffect} from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms, getLoadedDataStatus} from '../../store/main-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import UserBlock from '../../components/user-block/user-block';
import Loading from '../loading/loading';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

function MyList(): JSX.Element{
  const films = useAppSelector(getFavoriteFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);

  if (isDataLoaded) {
    return <Loading />;
  }
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo/>

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>{films.length}</span></h1>
        <UserBlock/>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        {films.map((film) => (
          <SmallFilmCard
            key={film.id}
            id={film.id}
            title={film.name}
            previewImage={film.previewImage}
            videoUrl={film.videoLink}
          />))}
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
