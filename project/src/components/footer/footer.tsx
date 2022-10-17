import React from 'react';
import Logo from '../logo/logo';

const Footer: React.FC = () =>
  (
    <footer className='page-footer'>
      <Logo />
      <div className='copyright'>
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );

export default Footer;
