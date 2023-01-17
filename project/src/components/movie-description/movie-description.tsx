import { Navigate } from 'react-router-dom';
import { MovieTabs } from '../../types/movie-tabs';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import MovieOverview from '../movie-overview/movie-overview';
import { useAppSelector } from '../../hooks';
import {
  getComments,
  getIsMovieFound,
  getIsMovieLoading,
  getMovie,
  getMoviePageTab
} from '../../store/film-data/selectors';
import Tabs from '../tabs/tabs';
import Loading from '../../pages/loading/loading';

const MovieDescription = () => {
  const currentTab = useAppSelector(getMoviePageTab);
  const movie = useAppSelector(getMovie);
  const comments = useAppSelector(getComments);
  const isMovieFound = useAppSelector(getIsMovieFound);
  const isFilmLoadingStatus = useAppSelector(getIsMovieLoading);

  if (isFilmLoadingStatus) {
    return <Loading/>;
  }

  if (!isMovieFound) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <div className="film-card__desc">
      <Tabs currentTab={currentTab}/>

      {currentTab === MovieTabs.Overview && <MovieOverview movie={movie!}/>}
      {currentTab === MovieTabs.Details && <MovieDetails movie={movie!}/>}
      {currentTab === MovieTabs.Reviews && <MovieReviews reviews={comments}/>}
    </div>
  );
};

export default MovieDescription;
