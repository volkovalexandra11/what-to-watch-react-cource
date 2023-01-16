import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>Looking for something?</h1>
      <Link to='/'>To main</Link>
    </>
  );
}

export default NotFound;
