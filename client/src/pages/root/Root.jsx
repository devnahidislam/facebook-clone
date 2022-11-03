import React, { useContext } from 'react';
import './root.scss';
import './theme.scss';
import { Navbar, LeftSidebar, RightSidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import { DarkModeContext } from './../../context/darkModeContext';
import { AuthContext } from './../../context/authContext';

const Root = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'} root`}>
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
