import { FC } from 'react';
import { MovieTabs } from '../../types/movie-tabs';
import { useAppDispatch } from '../../hooks';
import { changeFilmTab } from '../../store/film-data/film-data';

type Props = {
  currentTab: string
};

const Tabs : FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { currentTab } = props;

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === MovieTabs.Overview && 'film-nav__item--active'}`}>
          <a
            href="src/components/tabs/tabs#overviews"
            className="film-nav__link"
            onClick={
              (e) => {
                e.preventDefault();
                dispatch(changeFilmTab(MovieTabs.Overview));
              }
            }
          >
            {MovieTabs.Overview}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === MovieTabs.Details && 'film-nav__item--active'}`}>
          <a
            href="src/components/tabs/tabs#details"
            className="film-nav__link"
            onClick={
              (e) => {
                e.preventDefault();
                dispatch(changeFilmTab(MovieTabs.Details));
              }
            }
          >
            {MovieTabs.Details}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === MovieTabs.Reviews && 'film-nav__item--active'}`}>
          <a
            href="src/components/tabs/tabs#reviews"
            className="film-nav__link"
            onClick={
              (e) => {
                e.preventDefault();
                dispatch(changeFilmTab(MovieTabs.Reviews));
              }
            }
          >
            {MovieTabs.Reviews}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
