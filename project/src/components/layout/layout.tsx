import React from 'react';
import {Outlet} from 'react-router-dom';
import {Ancillary} from '../ancillary/ancillary';

const Layout: React.FC = () =>
  (
    <>
      <Ancillary />
      <main>
        <Outlet/>
      </main>
    </>
  );


export default Layout;
