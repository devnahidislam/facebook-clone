import React from 'react'
import './home.scss';
import { Navbar, LeftSidebar, RightSidebar } from '../../components';
const home = () => {
  return (
    <div>
      <Navbar />
      <LeftSidebar/>
      <h2>Home Page</h2>
      <RightSidebar/>
    </div>
  )
}

export default home