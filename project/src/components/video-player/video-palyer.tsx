import { FC, useEffect, useRef } from 'react';
import { TMovie } from '../../types/TMovie';

type Props = {
  movie: TMovie;
  isPlaying: boolean;
  needSound: boolean;
  width: number;
  height: number;
}

const VideoPlayer: FC<Props> = (props) => {
  const { movie, isPlaying, needSound, width, height } = props;
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (playerRef === null) {
      return;
    }

    if (isPlaying) {
      playerRef.current?.play();
    } else {
      playerRef.current?.load();
    }

  }, [isPlaying]);

  return (
    <video
      ref={playerRef}
      src={movie.videoLink}
      poster={movie.previewImage}
      muted={!needSound}
      width={width}
      height={height}
    />
  )
}

export default VideoPlayer;
