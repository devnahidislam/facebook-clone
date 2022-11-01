import React from 'react';
import './root.scss';
import { Navbar, LeftSidebar, RightSidebar } from '../../components';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="root">
      <Navbar />
      <div className="main">
        <LeftSidebar />
        <div className="outlet">
          <Outlet />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Root;
