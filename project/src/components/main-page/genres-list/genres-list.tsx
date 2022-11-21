import { FC } from 'react';
import GenreListItem from './genre-list-item';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { movies } from '../../../mocks/movies';
import { ALL_GENRES } from '../../../constants/constants';
import { changeGenre, getMoviesByGenre, resetVisibleFilmsCount } from '../../../store/action';

type Props = {
  allGenres: string[];
}

const GenresList: FC<Props> = (props) => {
  const { allGenres } = props;
  const { genre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: string) => {
    dispatch(changeGenre({ genre }));
    dispatch(getMoviesByGenre({ genre }));
    dispatch(resetVisibleFilmsCount());
  };

  return (
    <ul className="catalog__genres-list">
      {
        allGenres.map((genre) => (
          <li className={`catalog__genres-item ${genre === genre ? 'catalog__genres-item--active' : ''}`} key={genre} onClick={() => handleChangeActiveGenre(genre)}>
            <span className="catalog__genres-link">{genre}</span>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
