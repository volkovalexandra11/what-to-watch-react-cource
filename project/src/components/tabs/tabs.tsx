import { FC, useState } from 'react';
import { TMovie } from '../../types/TMovie';
import { TReview } from '../../types/TReview';
import MovieDetailsTab from './movie-details-tab/movie-detail-tab';
import MovieOverviewTab from './overview-tab/overview-tab';
import MovieReviewsTab from './movie-reviews-tab/movie-reviews-tab';
import MovieTabItem from './tab-item';

const TABS = ['Overview', 'Details', 'Reviews'];

type Props = {
  movie: TMovie;
  reviews: TReview[];
}

const Tabs: FC<Props> = (props) => {
  const { movie, reviews } = props;
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            TABS
              .map((tabName) =>
                <MovieTabItem
                  key={tabName}
                  name={tabName}
                  isActive={tabName === activeTab}
                  onClick={handleTabClick}
                />
              )
          }
        </ul>
      </nav>

      {activeTab === 'Reviews' && <MovieReviewsTab reviews={reviews}/>}
      {activeTab === 'Overview' && <MovieOverviewTab movie={movie}/>}
      {activeTab === 'Details' && <MovieDetailsTab movie={movie}/>}
    </div>
  );
};

export default Tabs;
