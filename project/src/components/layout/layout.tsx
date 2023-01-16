import React from 'react';
import {Outlet} from 'react-router-dom';

const Layout: React.FC = () =>
  (
    <main>
      <Outlet/>
    </main>
  );


export default Layout;
