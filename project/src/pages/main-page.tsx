import { FC } from 'react';

import PromoFilmCard from '../components/main-page/promo-movie-card/promo-movie-card';
import Footer from '../components/footer/footer';
import { TMovie } from '../types/TMovie';
import Catalog from '../components/catalog/catalog';

type Props = {
  movieList: Array<TMovie>;
  promoMovie: TMovie;
}

const MainPage: FC<Props> = (props) => {
  const { movieList, promoMovie } = props;

  return (
    <>
      <PromoFilmCard movie={promoMovie}/>
      <div className='page-content'>
        <Catalog movieList={movieList}/>
        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
