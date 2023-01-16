import {checkFullScreen, CombinedElement, exitFullScreen, requestFullScreen} from '../../utils/full-screen-api';

function FullScreenButton(): JSX.Element {
  const element = document.querySelector('.player') as CombinedElement;

  const onFullScreenClick = async () => {

    if (checkFullScreen()) {
      await exitFullScreen();
    } else {
      await requestFullScreen(element);
    }
  };

  return (
    <button type="button" className="player__full-screen" onClick={onFullScreenClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default FullScreenButton;
