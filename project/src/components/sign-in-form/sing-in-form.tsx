import { FC, useRef, useState, MouseEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthStatus } from '../../constants/constants';
import { login } from '../../store/api-action';
import { TAuthData } from '../../types/TAuthData';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const SingInForm: FC = () => {
  const authStatus = useAppSelector(getAuthorizationStatus);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const checkEmail = (email: string): boolean => {
    const result = /\S+@\S+\.\S+/.test(email);
    setIsInvalidEmail(!result);

    return result;
  };

  const checkPassword = (password: string): boolean => {
    const result = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/.test(password);
    setIsInvalidPassword(!result);

    return result;
  };

  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const onSubmit = (authData: TAuthData) => {
    dispatch(login(authData));
  };


  const handleSubmitButtonClick = (_: MouseEvent<HTMLButtonElement>) => {
    if (emailRef.current !== null
      && passwordRef.current !== null
      && checkEmail(emailRef.current?.value)
      && checkPassword(passwordRef.current?.value)) {
      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authStatus === AuthStatus.Auth) {
    return <Navigate to='/'/>;
  }

  return (
    <form action='#' className='sign-in__form'>
      {
        isInvalidEmail &&
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      }
      {
        isInvalidPassword &&
        <div className="sign-in__message">
          <p>Please enter a valid password</p>
        </div>
      }
      <div className='sign-in__fields'>
        <div className={`sign-in__field  ${isInvalidEmail && 'sign-in__field--error'}`}>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            ref={emailRef}
            onChange={() => setIsInvalidEmail(false)}
          />
          <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
        </div>
        <div className={`sign-in__field ${isInvalidPassword && 'sign-in__field--error'}`}>
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            ref={passwordRef}
            onChange={() => setIsInvalidPassword(false)}
          />
          <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
        </div>
      </div>
      <div className='sign-in__submit'>
        <button className='sign-in__btn' type='submit' onClick={handleSubmitButtonClick}>Sign in</button>
      </div>
    </form>
  );
};

export default SingInForm;
