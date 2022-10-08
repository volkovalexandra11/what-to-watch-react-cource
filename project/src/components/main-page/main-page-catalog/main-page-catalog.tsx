import React from 'react';
import Catalog from '../../catalog/catalog';

const MainPageCatalog: React.FC = () => {
  const movieNames = ['Fantastic Beasts: The Crimes of Grindelwald',
    'Bohemian Rhapsody',
    'Macbeth',
    'We need to talk about Kevin',
    'What We Do in the Shadows',
    'Revenant',
    'Johnny English',
    'Shutter Island',
    'Pulp Fiction',
    'Moonrise Kingdom',
    'No Country for Old Men',
    'Snatch',
    'Seven Years in Tibet',
    'Midnight Special',
    'War of the Worlds',
    'Orlando',
    'Mindhunter',
    'Midnight Special'];

  return (
    <Catalog movieNames={movieNames}/>
  );
};

export default MainPageCatalog;
