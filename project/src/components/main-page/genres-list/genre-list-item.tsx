import { FC, MouseEvent } from 'react';
import { changeGenre } from '../../../store/action';
import { useAppDispatch } from '../../../hooks';

type Props = {
  genre: string;
  isActive: boolean;
}

const GenreListItem: FC<Props> = (props) => {
  const { genre, isActive } = props;
  const dispatch = useAppDispatch();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(changeGenre({ genre }))
  }

  return (
    <li className={`catalog__genres-item ${isActive ? ' catalog__genres-item--active' : ''}`}>
      <a href='#' className='catalog__genres-link' onClick={handleLinkClick}>{genre}</a>
    </li>
  );
}

export default GenreListItem;
