import React from 'react';
import { Posts, Stories } from '../../components';
import './home.scss';

const home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
};

export default home;
