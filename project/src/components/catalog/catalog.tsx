import React, { useState } from 'react';
import MovieCard from '../main-page/card/card';
import { TMovie } from '../../types/TMovie';
import GenresList from '../main-page/genres-list/genres-list';
import { ALL_GENRES } from '../../constants/constants';

type Props = {
  movieList: TMovie[];
}

const Catalog: React.FC<Props> = ({movieList}) => {
  const [, setActiveFilmCard] = useState<number | null>(null);
  const allGenres = [ALL_GENRES].concat([...new Set(movieList.map((m) => m.genre))]);

  return (
    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <GenresList allGenres={allGenres} currentGenre={ALL_GENRES}/>

      <div className='catalog__films-list'>
        {movieList
          .map((movie, idx) =>
            <MovieCard key={`${movie.posterImage}`} movie={movie} onHover={setActiveFilmCard}/>
          )}
      </div>

      <div className='catalog__more'>
        <button className='catalog__button' type='button'>Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
