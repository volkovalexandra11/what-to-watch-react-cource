import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import SmallPlayer from '../small-player/small-player';
import { useAppDispatch } from '../../hooks';
import { resetMainScreen } from '../../store/main-data/main-data';
import { TMovie } from '../../types/TMovie';

type Props = {
  movie: TMovie;
};

const MovieCard: FC<Props> = (props) => {
  const { movie } = props;
  const dispatch = useAppDispatch();
  const [isPointed, setIsPointed] = useState(false);

  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseEnter={() => setIsPointed(true)}
      onMouseLeave={() => setIsPointed(false)}
    >
      <div className='small-film-card__image'>
        {
          isPointed
            ? <SmallPlayer image={movie.previewImage} previewVideo={movie.previewVideoLink}/>
            : <img src={movie.previewImage} alt={movie.name} width='280' height='175'/>
        }
      </div>
      <h3 className='small-film-card__title'>
        <Link
          to={`/films/${movie.id}`}
          className='small-film-card__link'
          onClick={() => (dispatch(resetMainScreen()))}
        >
          {movie.name}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
