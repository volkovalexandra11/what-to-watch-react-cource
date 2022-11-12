import React from 'react';
import {TMovie} from '../../../types/TMovie';

type Props = {
movie: TMovie;
}

export const MovieCard: React.FC<Props> = ({ movie }) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={`/${movie.previewImage}`}
        alt={movie.name} width="280" height="175"
      />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="/">{movie.name}</a>
    </h3>
  </article>
);

