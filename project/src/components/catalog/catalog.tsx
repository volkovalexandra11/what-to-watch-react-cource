import React, { useState } from 'react';
import MovieCard from '../main-page/card/card';
import { TMovie } from '../../types/TMovie';
import GenresList from '../main-page/genres-list/genres-list';
import { ALL_GENRES } from '../../constants/constants';
import ShowMoreButton from '../show-more-button';
import { useAppSelector } from '../../hooks';

type Props = {
  movieList: TMovie[];
}

const Catalog: React.FC<Props> = ({ movieList }) => {
  const [, setActiveFilmCard] = useState<number | null>(null);
  const [shownMoviesCount, setShownMoviesCount] = useState<number>(8);
  const { activeGenre } = useAppSelector((state) => state);
  const allGenres = [ALL_GENRES].concat([...new Set(movieList.map((m) => m.genre))]);

  return (
    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <GenresList allGenres={allGenres}/>

      <div className='catalog__films-list'>
        {movieList
          .filter((m) => m.genre === activeGenre || activeGenre === ALL_GENRES)
          .slice(0, shownMoviesCount)
          .map((movie, idx) =>
            <MovieCard key={`${movie.posterImage}`} movie={movie} onHover={setActiveFilmCard}/>
          )}
      </div>

      <ShowMoreButton isVisible={movieList.length > shownMoviesCount} setVisibleMoviesCount={setShownMoviesCount}
      ></ShowMoreButton>
    </section>
  );
};

export default Catalog;
