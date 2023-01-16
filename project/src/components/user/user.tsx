import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthStatus } from '../../constants/constants';
import { Link } from 'react-router-dom';
import AuthorizedUser from './authorized-user';
import { getAuthorizationStatus, getAvatarUrl } from '../../store/user-process/selectors';

const User: FC = () => {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const avatarUrl = useAppSelector(getAvatarUrl);

  return (
    <ul className="user-block">
      {authStatus === AuthStatus.Auth
        ? <AuthorizedUser avatarLink={avatarUrl ? avatarUrl : '/img/avatar.jpg'}/>
        : <Link to={AppRoute.Login} className='user-block__link'>Sign in</Link>}
    </ul>
  );
};

export default User;
