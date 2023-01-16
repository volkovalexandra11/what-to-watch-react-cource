import React, { FC, useEffect } from 'react';
import Logo from '../components/logo/logo';
import Footer from '../components/footer/footer';
import Catalog from '../components/catalog/catalog';
import User from '../components/user/user';
import Loader from '../components/Loader/loader';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { getFavoriteFilms, getLoadedDataStatus } from '../store/main-data/selectors';
import { AuthStatus } from '../constants/constants';
import { fetchFavoriteMoviesAction } from '../store/api-action';


const MyList: FC = () => {
  const moviesList = useAppSelector(getFavoriteFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoriteMoviesAction());
    }
  }, [authStatus, dispatch]);

  if (isDataLoaded) {
    return <Loader/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <User/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Catalog movieList={moviesList}/>
      </section>

      <Footer/>
    </div>
  );
};
export default MyList;
