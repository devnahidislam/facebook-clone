import React from 'react';
import { Posts, Stories } from '../../components';
import './home.scss';

const home = () => {
  return (
    <div className="home">
      <Stories />
      <div className="posts">
        <Posts />
      </div>
    </div>
  );
};

export default home;
