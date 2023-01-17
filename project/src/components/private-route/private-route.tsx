import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';

type Props = {
  children: JSX.Element;
};

const PrivateRoute : FC<Props> = (props) => {
  const { children } = props;
  const authStatus = useAppSelector(getAuthStatus);

  return authStatus === AuthStatus.Auth ? children : <Navigate to={'/login'}/>;
};

export default PrivateRoute;
