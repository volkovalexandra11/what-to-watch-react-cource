import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import Loading from '../../pages/loading/loading';
import {isCheckedAuth} from '../../utils/check-auth';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (isCheckedAuth(authorizationStatus)) {
    return (
      <Loading/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path='login' element={<SignIn/>}/>
          <Route
            path='mylist'
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id' element={<MoviePage/>}/>
          <Route path='player/:id' element={<Player/>}/>
          <Route
            path='films/:id/review'
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <AddReview/>
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
