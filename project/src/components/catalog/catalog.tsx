import SmallFilmCard from '../small-film-card/small-film-card';
import React from 'react';
import {Film} from '../../types/film';

type CatalogProps = {
  films: Film[];
}
function Catalog({ films }: CatalogProps): JSX.Element{
  return (
    <div className='catalog__films-list'>
      {films.map((film) => (
        <SmallFilmCard
          key={film.id}
          id={film.id}
          title={film.name}
          previewImage={film.previewImage}
          videoUrl={film.previewVideoLink}
        />))}
    </div>);
}

export default Catalog;
