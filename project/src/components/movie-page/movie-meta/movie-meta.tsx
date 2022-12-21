import React from 'react';

type Props = {
  movieName: string;
  movieGenre: string;
  movieCreationDate: number;
}

const MovieMeta: React.FC<Props> = (props: Props) => {
  const {movieName, movieGenre, movieCreationDate} = props;
  return (
    <>
      <h2 className='film-card__title'>{movieName}</h2>
      <p className='film-card__meta'>
        <span className='film-card__genre'>{movieGenre}</span>
        <span className='film-card__year'>{movieCreationDate}</span>
      </p>
    </>
  );
};

export default MovieMeta;
