import React from 'react';
import Logo from '../logo/logo';
import User from '../user/user';

const Header: React.FC = () =>
  (
    <header className="page-header film-card__head">
      <Logo/>

      <User/>
    </header>
  );

export default Header;
