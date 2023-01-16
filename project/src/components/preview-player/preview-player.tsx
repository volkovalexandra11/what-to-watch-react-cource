import {useEffect, useRef} from 'react';

type PreviewPlayerProps = {
  image: string,
  previewVideo: string,
};

function PreviewPlayer ({image, previewVideo}: PreviewPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const delay: NodeJS.Timeout = setTimeout(
      () => videoRef.current?.play(),
      1000);

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
}

export default PreviewPlayer;
