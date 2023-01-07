import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page';
import SignIn from '../../pages/sign-in';
import MyList from '../../pages/my-list';
import Movie from '../../pages/movie';
import AddReview from '../../pages/add-review';
import Player from '../../pages/player';
import PageNotFound from '../../pages/not-found';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Loader from '../Loader/loader';
import { useAppSelector } from '../../hooks';
import { getPromoMovie } from '../../helpers/api_functions';
import { TMovie } from '../../types/TMovie';
import { ALL_GENRES } from '../../constants/constants';

const App: FC = () => {
  const { activeGenre, movieList, isMoviesLoaded } = useAppSelector((state) => state);
  const [promoMovie, setPromoMovie] = useState<TMovie>();
  const filteredMovies = movieList.filter((film) => film.genre === activeGenre || activeGenre === ALL_GENRES);

  useEffect(() => {
    getPromoMovie().then(({ data }) => setPromoMovie(data));
  }, []);

  if (!isMoviesLoaded || !promoMovie) {
    return <Loader/>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route
            index
            element={
              <MainPage  movieList={filteredMovies} promoMovie={promoMovie}/>
            }
          />
          <Route path='login' element={<SignIn/>}/>
          <Route
            path='mylist'
            element={
              <PrivateRoute>
                <MyList moviesList={movieList.filter((m) => m.isFavorite)}/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id' element={<Movie/>}/>
          <Route path='player/:id' element={<Player movie={promoMovie}/>}/>
          <Route
            path='films/:id/review'
            element={
              <PrivateRoute >
                <AddReview/>
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
