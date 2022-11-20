import { FC } from 'react';
import GenreListItem from './genre-list-item';

type Props = {
  allGenres: string[];
  currentGenre: string;
}

const GenresList: FC<Props> = (props) => {
  const { allGenres, currentGenre } = props;
  return (
    <ul className='catalog__genres-list'>
      {allGenres.map((genre) => <GenreListItem key={genre} genre={genre} isActive={genre === currentGenre}/>)}
    </ul>
  );
}

export default GenresList;
