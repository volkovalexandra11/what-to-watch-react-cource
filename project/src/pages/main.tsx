import React from 'react';

import PromoFilmCard from '../components/main-page/promo-movie-card/promo-movie-card';
import Footer from '../components/footer/footer';
import MainPageCatalog from '../components/main-page/main-page-catalog/main-page-catalog';
import {TMovie} from '../types/TMovie';

type Props = {
  movie: TMovie;
}

const Main: React.FC<Props> = (props) => {
  const {movie} = props;

  return (
    <>
      <PromoFilmCard
        promoMovieName={movie.name}
        promoMovieGenre={movie.genre}
        promoMovieCreationDate={movie.creationDate}
      />

      <div className='page-content'>
        <MainPageCatalog/>
        <Footer/>
      </div>
    </>
  );
};

export default Main;
