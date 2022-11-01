import React, { useEffect, useRef, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip, Zoom } from '@mui/material';

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    let menuHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', menuHandler);
  });
  return domNode;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((open) => !open);

  const domNode = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <div className="navbar">
      <div className="navLeft">
        <Link to={'/'}>
          <span>facebook</span>
        </Link>
      </div>

      <div className="navCenter">
        <div className="searchbar">
          <SearchIcon fontSize="small" className="searchIcon" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="serarchInput"
          />
        </div>
      </div>

      <div className="navRight">
        <div className="navIcons">
          <Tooltip arrow TransitionComponent={Zoom} title="Night Mood">
            <IconButton>
              <DarkModeIcon fontSize="small" sx={{ color: 'black' }} />
            </IconButton>
          </Tooltip>
          <Tooltip arrow TransitionComponent={Zoom} title="Messenger">
            <IconButton>
              <ChatIcon fontSize="small" sx={{ color: 'black' }} />
            </IconButton>
          </Tooltip>
          <Tooltip arrow TransitionComponent={Zoom} title="Notification">
            <IconButton>
              <NotificationsActiveIcon
                fontSize="small"
                sx={{ color: 'black' }}
              />
            </IconButton>
          </Tooltip>
        </div>
        <div className="avatar" ref={domNode}>
          <Tooltip arrow TransitionComponent={Zoom} title="Account">
            <div className="menuToggle" onClick={() => toggle()}>
              <img
                src="assets/icons/noAvatar.png"
                alt="avata"
                className="navImg"
              />
              <div className="profileBadge">
                <KeyboardArrowDownIcon className="badgeIcon" />
              </div>
            </div>
          </Tooltip>
          {open && (
            <div className="menu">
              <Link to={'/profile'}>
                <div className="profile">
                  <img src="assets/icons/nahid.jpg" alt="avatar" />
                  Nahid Islam
                </div>
              </Link>
              <div className="menuOption">
                <SettingsOutlinedIcon fontSize="small" />
                Settings & Privacy
              </div>
              <div className="menuOption">
                <HelpOutlineIcon fontSize="small" />
                Help & Support
              </div>
              <div className="menuOption">
                <FeedbackOutlinedIcon fontSize="small" />
                Give Feedback
              </div>
              <Link to={'/login'}>
                <div className="menuOption">
                  <LoginIcon fontSize="small" />
                  Log In
                </div>
              </Link>
              <div className="menuOption">
                <LogoutIcon fontSize="small" />
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
