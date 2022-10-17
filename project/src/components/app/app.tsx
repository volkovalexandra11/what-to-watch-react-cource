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
import {TMovie} from '../../types/TMovie';



function App(): JSX.Element {
  const movie: TMovie = {
    name: 'The Grand Budapest hotel',
    genre: 'Drama',
    creationDate: '2014'
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route
            index
            element={
              <Main movie={movie}/>
            }
          />
          <Route path='login' element={<SignIn/>}/>
          <Route
            path='mylist'
            element={
              <PrivateRoute hasAccess={false}>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route path='films/:id' element={<Movie/>}/>
          <Route path='player/:id' element={<Player/>}/>
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
}

export default App;
