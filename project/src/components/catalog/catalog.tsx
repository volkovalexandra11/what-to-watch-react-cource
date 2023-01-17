import MovieCard from '../movie-card/movie-card';
import { FC } from 'react';
import { TMovie } from '../../types/TMovie';

type Props = {
  movieList: TMovie[];
}
const Catalog: FC<Props> = (props) => {
  const { movieList } = props;
  return (
    <div className='catalog__films-list'>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />))}
    </div>);
}

export default Catalog;
