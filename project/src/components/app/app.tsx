import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/main';
import SignIn from '../../pages/sign-in';
import MyList from '../../pages/my-list';
import Movie from '../../pages/movie';
import AddReview from '../../pages/add-review';
import Player from '../../pages/player';
import PageNotFound from '../../pages/not-found';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { useAppSelector } from '../../hooks';

const App : FC = () => {
  const { movieList } = useAppSelector((state) => state);
  const promoMovie = movieList[0];

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route
            index
            element={
              <Main promoMovie={promoMovie} moviesList={movieList.slice(1)}/>
            }
          />
          <Route path='login' element={<SignIn/>}/>
          <Route
            path='mylist'
            element={
              <PrivateRoute hasAccess={false}>
                <MyList moviesList={movieList.filter((m) => m.isFavorite)}/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id' element={<Movie/>}/>
          <Route path='player/:id' element={<Player movie={promoMovie}/>}/>
          <Route
            path='films/:id/review'
            element={
              <PrivateRoute hasAccess={false}>
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
