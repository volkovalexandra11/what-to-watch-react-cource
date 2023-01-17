import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteMovies, getIsDataLoaded } from '../../store/main-data/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';
import { fetchFavoriteMoviesAction } from '../../store/api-action';
import { AuthStatus } from '../../const';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movie-card';

const MyList = () => {
  const movies = useAppSelector(getFavoriteMovies);
  const authStatus = useAppSelector(getAuthStatus);

  const isDataLoaded = useAppSelector(getIsDataLoaded);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoriteMoviesAction());
    }
  }, [authStatus, dispatch]);

  if (isDataLoaded) {
    return <Loading/>;
  }
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo/>

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'
        >{movies.length}</span></h1>
        <UserBlock/>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />))}
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
