import React from 'react';

type Props = {
  movieName: string;
  picPath: string;
}

export const MovieCard: React.FC<Props> = (props) => {
  const {movieName, picPath} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${picPath}.jpg`}
          alt={movieName} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="/">{movieName}</a>
      </h3>
    </article>
  );
};
