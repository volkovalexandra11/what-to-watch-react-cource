import { FC, useEffect, useRef } from 'react';

const TIME_TO_PLAY_VIDEO = 1000;

type Props = {
  image: string,
  previewVideo: string,
};

const SmallPlayer: FC<Props> = (props: Props) => {
  const {image, previewVideo} = props
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay: NodeJS.Timeout = setTimeout(
      () => videoRef.current?.play(),
      TIME_TO_PLAY_VIDEO);

    return () => clearTimeout(delay);
  });

  return (
    <video
      ref={videoRef}
      poster={image}
      width="280"
      height="175"
      loop muted
    >
      <source src={previewVideo} type="video/mp4" />
    </video>
  );
};

export default SmallPlayer;
