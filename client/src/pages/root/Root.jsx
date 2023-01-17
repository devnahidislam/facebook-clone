import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { LeftSidebar, Navbar, RightSidebar } from '../../components';
import { DarkModeContext } from './../../context/darkModeContext';
import './root.scss';
import './theme.scss';

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
