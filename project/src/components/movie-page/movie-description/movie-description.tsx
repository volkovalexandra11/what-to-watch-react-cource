import React from 'react';

type Props = {
  summary: string;
  description: string;
  director: string;
  starring: string;
}

const MovieDescription:React.FC<Props> = (props) => {
  const {summary, description, director, starring} = props;

  return (
    <div className="film-card__text">
      <p>{summary}</p>

      <p>{description}</p>

      <p className="film-card__director"><strong>Director: {director}</strong></p>

      <p className="film-card__starring"><strong>Starring: {starring}</strong></p>
    </div>
  );
};

export default MovieDescription;
