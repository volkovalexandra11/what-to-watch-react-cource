import React from 'react';

import PromoFilmCard from '../components/main-page/promo-movie-card/promo-movie-card';
import Footer from '../components/footer/footer';
import {TMovie} from '../types/TMovie';
import Catalog from '../components/catalog/catalog';

type Props = {
  promoMovie: TMovie,
  moviesList: TMovie[]
}

const Main: React.FC<Props> = (props) => {
  const {promoMovie, moviesList} = props;

  return (
    <>
      <PromoFilmCard movie={promoMovie}/>

      <div className='page-content'>
        <Catalog movieList={moviesList}/>
        <Footer/>
      </div>
    </>
  );
};

export default Main;
