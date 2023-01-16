import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm, getIsFilmFoundStatus, getIsFilmLoadingStatus} from '../../store/film-data/selectors';
import Loading from '../loading/loading';
import {fetchFilmByID} from '../../store/api-actions';
import {resetMainScreen} from '../../store/main-data/main-data';
import FullScreenButton from '../../components/full-screen-button/full-screen-button';

function Player(): JSX.Element{
  const id = Number(useParams().id);
  const film = useAppSelector(getFilm);
  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const player = useRef() as MutableRefObject<HTMLVideoElement>;

  const [videoFullTime, setVideoTime] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  const [playing, setPlaying] = useState(false);

  const getVideoTimeLeft = (fullTime: number, currentTime: number) => {
    const timeLeft = fullTime - currentTime;
    return `${Math.floor(timeLeft / 60)}:${(`0${Math.floor(timeLeft % 60)}`).slice(-2)}`;
  };

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  if(player.current) {
    player.current.ontimeupdate = () => {
      setVideoCurrentTime(player.current?.currentTime);
      setVideoProgress((player.current?.currentTime / videoFullTime) * 100);
    };
  }

  useEffect(() => {
    if(player.current) {
      setVideoTime(player.current.duration);
    }
  }, [playing]);

  if (!film) {
    return <Navigate to={'/notfound'}/>;
  }

  if (isFilmLoadingStatus) {
    return <Loading />;
  }

  if (!isFilmFoundStatus) {
    return <Navigate to={'/notfound'}/>;
  }

  return (
    <div className='player'>

      <video
        ref={player}
        autoPlay
        src={film?.videoLink}
        id="video"
        className="player__video"
        poster={film?.backgroundImage}
        onPlay={() => setPlaying(true)}
      />

      <Link
        to={`/films/${id}`}
        className='player__exit'
        onClick={
          () => {
            dispatch(resetMainScreen());
            navigate(-1);
          }
        }
      >
        Exit
      </Link>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className="player__progress" value={videoProgress} max="100"></progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            -{videoFullTime && videoCurrentTime
              ? getVideoTimeLeft(videoFullTime, videoCurrentTime)
              : '0:00:00'}
          </div>
        </div>

        <div className="player__controls-row">
          {playing ? (
            <button
              type="button"
              className="player__play"
              onClick={
                () => {
                  player.current.pause();
                  setPlaying(false);
                }
              }
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button
              type="button"
              className="player__play"
              onClick={
                async () => {
                  await player.current.play();
                  setPlaying(true);
                }
              }
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}

          <FullScreenButton/>
        </div>
      </div>
    </div>
  );
}

export default Player;
