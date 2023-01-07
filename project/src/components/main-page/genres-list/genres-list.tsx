import { FC } from 'react';
import { useAppDispatch } from '../../../hooks';
import { changeGenre } from '../../../store/action';

type Props = {
  allGenres: string[];
}

const GenresList: FC<Props> = (props) => {
  const { allGenres } = props;
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: string) => {
    dispatch(changeGenre({ genre }));
  };

  return (
    <ul className="catalog__genres-list">
      {
        allGenres.map((genre) => (
          <li className={`catalog__genres-item ${genre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}
            onClick={() => handleChangeActiveGenre(genre)}
          >
            <span className="catalog__genres-link">{genre}</span>
          </li>
        ))
      }
    </ul>
  );
};

export default GenresList;
