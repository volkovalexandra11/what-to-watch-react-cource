import React, { FC } from 'react';
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
import { isCheckedAuth } from '../../utils/check-auth';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const App: FC = () => {
  const authStatus = useAppSelector(getAuthorizationStatus);
  if (isCheckedAuth(authStatus)) {
    return (
      <Loader/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route
            index
            element={<MainPage/>}
          />
          <Route path='login' element={<SignIn/>}/>
          <Route
            path='mylist'
            element={
              <PrivateRoute>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id' element={<Movie/>}/>
          <Route path='player/:id' element={<Player/>}/>
          <Route
            path='films/:id/review'
            element={
              <PrivateRoute>
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
