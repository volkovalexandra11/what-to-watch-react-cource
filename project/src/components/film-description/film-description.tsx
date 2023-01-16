import {FilmTabs} from '../../types/film-tabs';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import FilmOverview from '../film-overview/film-overview';
import {useAppSelector} from '../../hooks';
import {
  getComments,
  getFilm,
  getFilmPageTab,
  getIsFilmFoundStatus,
  getIsFilmLoadingStatus
} from '../../store/film-data/selectors';
import Tabs from '../tabs/tabs';
import {Navigate} from 'react-router-dom';
import Loading from '../../pages/loading/loading';
import React from 'react';

function FilmDescription(): JSX.Element {
  const currentTab = useAppSelector(getFilmPageTab);
  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getComments);
  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);

  if (isFilmLoadingStatus) {
    return <Loading />;
  }

  if (!isFilmFoundStatus) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <div className="film-card__desc">
      <Tabs currentTab={currentTab}/>

      {currentTab === FilmTabs.Overview && <FilmOverview film={film!} />}
      {currentTab === FilmTabs.Details && <FilmDetails film={film!} />}
      {currentTab === FilmTabs.Reviews && <FilmReviews reviews={comments} />}
    </div>
  );
}

export default FilmDescription;
