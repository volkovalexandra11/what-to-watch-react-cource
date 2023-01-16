import { FC, useState, MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAllGenres } from '../../../utils/genre';
import { getMovies } from '../../../store/main-data/selectors';
import { changeGenre } from '../../../store/main-data/main-data';
import { DEFAULT_GENRE } from '../../../types/genres';

const GenresList: FC = () => {
  const [currentGenre, setCurrentGenre] = useState(DEFAULT_GENRE);
  const movies = useAppSelector(getMovies);
  const allGenres = getAllGenres(movies);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (e: MouseEvent<HTMLAnchorElement>, genre: string) => {
    e.preventDefault();
    dispatch(changeGenre({currentGenre: genre}));
    setCurrentGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => (
        <li
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
          key={genre}
        >
          <a
            href="/project/src/pages"
            className="catalog__genres-link"
            onClick={(e) => handleChangeActiveGenre(e, genre)}
          >
            {genre}
          </a>
        </li>))}
    </ul>
  );
};

export default GenresList;
