import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { movies } from './mocks/movies';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoMovie={movies[0]} moviesList={movies.slice(1)}/>
    </Provider>
  </React.StrictMode>,
);
