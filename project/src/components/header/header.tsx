import React from 'react';
import Logo from '../logo/logo';

const Header: React.FC = () =>
  (
    <header className="page-header film-card__head">
      <Logo/>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );

export default Header;
