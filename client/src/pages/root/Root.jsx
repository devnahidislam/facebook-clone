import React, { useContext } from 'react';
import './root.scss';
import './theme.scss';
import { Navbar, LeftSidebar, RightSidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import { DarkModeContext } from './../../context/darkModeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Root = () => {
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default Root;
