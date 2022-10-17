import React from 'react';
import {MovieCard} from '../main-page/card/card';

type Props = {
  movieNames: string[];
}

const Catalog: React.FC<Props> = (props: Props) => {
  const {movieNames} = props;

  let key = 0;

  const getPicPath = (movieName: string) => {
    const regex = /[\s,:]+/;
    return movieName.split(regex).map((s) => s.toLowerCase()).join('-');
  };

  return (
    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <ul className='catalog__genres-list'>
        <li className='catalog__genres-item catalog__genres-item--active'>
          <a href='#' className='catalog__genres-link'>All genres</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Comedies</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Crime</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Documentary</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Dramas</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Horror</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Kids & Family</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Romance</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Sci-Fi</a>
        </li>
        <li className='catalog__genres-item'>
          <a href='#' className='catalog__genres-link'>Thrillers</a>
        </li>
      </ul>

      <div className='catalog__films-list'>
        {movieNames.map((name) => <MovieCard key={key++} movieName={name} picPath={getPicPath(name)}/>)}
      </div>

      <div className='catalog__more'>
        <button className='catalog__button' type='button'>Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
