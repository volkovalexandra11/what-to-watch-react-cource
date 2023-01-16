import { FC, useEffect } from 'react';

import PromoMovieCard from '../components/main-page/promo-movie-card/promo-movie-card';
import Footer from '../components/footer/footer';
import Catalog from '../components/catalog/catalog';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import { getFilteredMovies, getPromo } from '../store/main-data/selectors';
import { fetchFavoriteMoviesAction } from '../store/api-action';
import { AuthStatus } from '../constants/constants';


const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const promoMovie = useAppSelector(getPromo);
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoriteMoviesAction());
    }
  }, [authStatus, dispatch]);
  const movieList = useAppSelector(getFilteredMovies);

  if (!promoMovie) {
    return <section className="film-card"></section>;
  }

  return (
    <>
      <PromoMovieCard movie={promoMovie}/>
      <div className='page-content'>
        <Catalog movieList={movieList}/>
        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
