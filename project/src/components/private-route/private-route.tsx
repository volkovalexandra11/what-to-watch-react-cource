import React from 'react';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  hasAccess: boolean;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {hasAccess, children} = props;

  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
