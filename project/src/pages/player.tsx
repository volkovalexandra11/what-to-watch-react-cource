import { FC } from 'react';
import Toggler from '../components/player/toggler/toggler';
import PlayButton from '../components/player/play-button/play-button';
import FullScreenButton from '../components/player/full-screen-button/full-screen-button';
import { TMovie } from '../types/TMovie';

type Props = {
  movie: TMovie;
}

const Player: FC<Props> = ({ movie }) =>
  (
    <div className="player">
      <video src="#" className="player__video" poster="/img/player-poster.jpg"/>

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

export default Player;
