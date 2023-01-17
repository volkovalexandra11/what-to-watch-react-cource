import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus, getAvatarUrl } from '../../store/user-process/selectors';
import { AuthStatus } from '../../const';

const UserBlock = () => {
  const dispatch = useAppDispatch();
  const avatar = useAppSelector(getAvatarUrl);
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus !== AuthStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={'/login'}
          >
            Login
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'}>
            <img src={avatar || ''} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to={'/'}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
};

export default UserBlock;
