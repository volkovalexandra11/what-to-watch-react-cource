import React from 'react';
import {MovieCard} from '../main-page/card/card';
import {TMovie} from "../../types/TMovie";

type Props = {
  moviesList: TMovie[];
}

const Catalog: React.FC<Props> = ({moviesList}) => {
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
        {moviesList.map((movie, idx) => <MovieCard key={`${idx}_ ${movie.picturePath}`} movieName={movie.name} picPath={movie.picturePath}/>)}
      </div>

      <div className='catalog__more'>
        <button className='catalog__button' type='button'>Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
