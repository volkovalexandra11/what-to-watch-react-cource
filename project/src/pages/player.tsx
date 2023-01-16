import { FC } from 'react';
import Toggler from '../components/player/toggler/toggler';
import PlayButton from '../components/player/play-button/play-button';
import FullScreenButton from '../components/player/full-screen-button/full-screen-button';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { getMovie } from '../store/film-data/selectors';

const Player: FC = () => {
  const id = Number(useParams().id);
  const movie = useAppSelector(getMovie);

  if (!movie) {
    return <Navigate to={'/notfound'}/>;
  }


  return (
    <div className="player">
      <video src={movie.videoLink} className="player__video" poster={`/img/${movie?.posterImage}`}/>
      <Link to={`/films/${id}`} className='player__exit'>Exit</Link>
      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <Toggler/>

        <div className="player__controls-row">
          <PlayButton/>
          <div className="player__name">Transpotting</div>
          <FullScreenButton/>
        </div>
      </div>
    </div>
  );
};


export default Player;
