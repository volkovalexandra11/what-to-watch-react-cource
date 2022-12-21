import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { TMovie } from '../../../types/TMovie';
import VideoPlayer from '../../video-player/video-palyer';

type Props = {
  movie: TMovie;
  onHover: Dispatch<SetStateAction<number | null>>;
}

const TIME_BEFORE_PLAYING_MS = 1000;

const MovieCard: FC<Props> = (props) => {
  const { movie, onHover } = props;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isNeedVideoToPlay, setIsNeedVideoToPlay] = useState(false);

 useEffect(() => {
    let needUpdate = true;

    if (isNeedVideoToPlay) {
      setTimeout(() => needUpdate && setIsVideoPlaying(true), TIME_BEFORE_PLAYING_MS);
    }

    return () => {needUpdate = false;};
  }, [isNeedVideoToPlay]);

  const handleCardMouseLeave = () => {
    setIsNeedVideoToPlay(false);
    setIsVideoPlaying(false);
  };

  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseOver={(_) => {
        setIsNeedVideoToPlay(true);
        onHover?.((_) => movie.id)
      }}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className='small-film-card__image'>
        <VideoPlayer
          movie={movie}
          needSound={false}
          isPlaying={isVideoPlaying}
          width={280}
          height={175}
        />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='/'>{movie.name}</a>
      </h3>
    </article>
  );
};

export default MovieCard;
