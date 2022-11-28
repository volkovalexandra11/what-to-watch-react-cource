import React from 'react';
import Logo from '../components/logo/logo';
import Footer from '../components/footer/footer';
import Catalog from "../components/catalog/catalog";
import { TMovie } from "../types/TMovie";
import User from '../components/user/user';

type Props = {
  moviesList: TMovie[]
}

const MyList: React.FC<Props> = ({ moviesList }) =>
  (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <User/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Catalog movieList={moviesList}/>
      </section>

      <Footer/>
    </div>
  );

export default MyList;
