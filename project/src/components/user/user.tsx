import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthStatus } from '../../constants/constants';
import { Link } from 'react-router-dom';
import AuthorizedUser from './authorized-user';

const User : FC = () => {
  const { authStatus, user } = useAppSelector((state) => state);

  return (
    <ul className="user-block">
      {authStatus === AuthStatus.Auth
        ? <AuthorizedUser avatarLink={user ? user.avatarUrl : '/img/avatar.jpg'} />
        : <Link to={AppRoute.Login} className='user-block__link'>Sign in</Link>}
    </ul>
  );
};

export default User;
