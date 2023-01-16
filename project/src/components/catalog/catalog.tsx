import React, { useState } from 'react';
import MovieCard from '../main-page/card/card';
import { TMovie } from '../../types/TMovie';
import GenresList from '../main-page/genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type Props = {
  movieList: TMovie[];
}

const Catalog: React.FC<Props> = ({ movieList }) => {
  const [, setActiveFilmCard] = useState<number | null>(null);
  const [shownMoviesCount, setShownMoviesCount] = useState<number>(8);

  return (
    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <GenresList/>

      <div className='catalog__films-list'>
        {movieList
          .slice(0, shownMoviesCount)
          .map((movie) =>
            <MovieCard key={`${movie.posterImage}`} movie={movie} onHover={setActiveFilmCard}/>
          )}
      </div>

      <ShowMoreButton isVisible={movieList.length > shownMoviesCount} setVisibleMoviesCount={setShownMoviesCount}/>
    </section>
  );
};

export default Catalog;
