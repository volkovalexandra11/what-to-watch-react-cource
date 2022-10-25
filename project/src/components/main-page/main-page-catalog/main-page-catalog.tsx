import React from 'react';
import Catalog from '../../catalog/catalog';
import {TMovie} from "../../../types/TMovie";

type Props = {
  moviesList: TMovie[]
}

const MainPageCatalog: React.FC<Props> = ({moviesList}) => {
  return (
    <Catalog movieNames={moviesList}/>
  );
};

export default MainPageCatalog;
