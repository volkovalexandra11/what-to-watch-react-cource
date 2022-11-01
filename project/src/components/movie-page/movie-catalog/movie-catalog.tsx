import { FC } from 'react';
import Catalog from '../../catalog/catalog';
import { TMovie } from '../../../types/TMovie';

type Props = {
  movieList: TMovie[];
}

const MovieCatalog : FC<Props> = ({movieList}) => {
  return (
    <Catalog movieList={movieList} />
  );
};

export default MovieCatalog;
