import { FC, MouseEvent } from 'react';

type Props = {
  name: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

const MovieTabItem: FC<Props> = (props) => {
  const { name, isActive, onClick } = props;
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick(name);
  }

  return (
    <li className={`film-nav__item ${isActive ? 'film-nav__item--active' : ''}`}>
      <a href="/" className="film-nav__link" onClick={handleClick}>{name}</a>
    </li>
  );
};

export default MovieTabItem;
