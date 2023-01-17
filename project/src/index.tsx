import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchMoviesAction, fetchPromoAction} from './store/api-action';
import Error from './components/error/error';

store.dispatch(fetchMoviesAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error/>
      <App/>
    </Provider>
  </React.StrictMode>,
);
