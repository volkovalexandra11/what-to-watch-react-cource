import React from 'react';

import PromoFilmCard from '../components/main-page/promo-movie-card/promo-movie-card';
import Footer from '../components/footer/footer';
import MainPageCatalog from '../components/main-page/main-page-catalog/main-page-catalog';
import {TMovie} from '../types/TMovie';

type Props = {
  promoMovie: TMovie,
  moviesList: TMovie[]
}

const Main: React.FC<Props> = (props) => {
  const {promoMovie, moviesList} = props;

  return (
    <>
      <PromoFilmCard
        promoMovieName={promoMovie.name}
        promoMovieGenre={promoMovie.genre}
        promoMovieCreationDate={promoMovie.creationDate}
      />

      <div className='page-content'>
        <MainPageCatalog moviesList={moviesList}/>
        <Footer/>
      </div>
    </>
  );
};

export default Main;
