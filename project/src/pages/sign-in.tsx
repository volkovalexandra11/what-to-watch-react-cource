import React from 'react';
import Logo from '../components/logo/logo';
import Footer from '../components/footer/footer';
import SingInForm from '../components/sign-in-form/sing-in-form';

const SignIn: React.FC = () =>
  (
    <div className="user-page">
      <header className='page-header user-page__head'>
        <Logo/>
        <h1 className='page-title user-page__title'>Sign in</h1>
      </header>

      <div className='sign-in user-page__content'>
        <SingInForm/>
      </div>

      <Footer />
    </div>
  );

export default SignIn;
