import React from 'react';
import Catalog from '../../catalog/catalog';

const MovieCatalog = () => {
  const movieNames = ['Fantastic Beasts: The Crimes of Grindelwald',
    'Bohemian Rhapsody',
    'Macbeth',
    'Aviator'];

  return (
    <Catalog movieNames={movieNames} />
  );
};

export default MovieCatalog;
