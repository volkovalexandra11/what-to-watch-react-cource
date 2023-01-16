import {FilmTabs} from '../../types/film-tabs';
import {useAppDispatch} from '../../hooks';
import {changeFilmTab} from '../../store/film-data/film-data';

type TabsProps = {
  currentTab: string
};

function Tabs({currentTab}: TabsProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === FilmTabs.Overview && 'film-nav__item--active'}`}>
          <a
            href="src/components/tabs/tabs#overviews"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab(FilmTabs.Overview));
              }
            }
          >
            {FilmTabs.Overview}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmTabs.Details && 'film-nav__item--active'}`}>
          <a
            href="src/components/tabs/tabs#details"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab(FilmTabs.Details));
              }
            }
          >
            {FilmTabs.Details}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmTabs.Reviews && 'film-nav__item--active'}`}>
          <a
            href="src/components/tabs/tabs#reviews"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab(FilmTabs.Reviews));
              }
            }
          >
            {FilmTabs.Reviews}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Tabs;
