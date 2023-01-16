import { MouseEvent, FC } from 'react';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../store/api-action';

type AuthorizedUserProps = {
  avatarLink: string;
}

const AuthorizedUser: FC<AuthorizedUserProps> = (props) => {
  const { avatarLink } = props;
  const dispatch = useAppDispatch();

  const handleSignOutClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <>
      <li className='user-block__item'>
        <div className='user-block__avatar'>
          <img src={avatarLink} alt='User avatar' width='63' height='63'/>
        </div>
      </li>
      <li className='user-block__item'>
        <a className='user-block__link' onClick={handleSignOutClick}>Sign out</a>
      </li>
    </>
  );
};

export default AuthorizedUser;
