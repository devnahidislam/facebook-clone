import ChatIcon from "@mui/icons-material/Chat";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { AuthContext } from "./../context/authContext";
import "./navbar.scss";

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    let menuHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", menuHandler);
  });
  return domNode;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((open) => !open);
  const { currentUser } = useContext(AuthContext);

  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  const domNode = useClickOutside(() => {
    setOpen(false);
  });

  const [searchCls, setSearchCls] = useState(false);
  const toggleActive = () => {
    setSearchCls((searchCls) => !searchCls);
  };
  const searchbar = searchCls ? "activeSearchbar" : "";
  const searchIcon = searchCls ? "activeSearchIcon" : "";
  const toogleCls = searchCls ? "active" : "";

  return (
    <div className="navbar">
      <div className="navLeft">
        <Link to={"/"}>
          <span>facebook</span>
        </Link>
      </div>

      <div className={`navCenter ${toogleCls}`}>
        <div className={`searchbar ${searchbar}`}>
          <SearchIcon
            className={`searchIcon ${searchIcon}`}
            onClick={toggleActive}
          />
          <input
            type="text"
            placeholder="Search Facebook"
            className={`serarchInput ${toogleCls}`}
            id="searchId"
          />
        </div>
      </div>

      <div className="navRight">
        <div className={`navIcons ${toogleCls}`}>
          <Tooltip
            arrow
            TransitionComponent={Zoom}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            <IconButton onClick={toggleTheme}>
              {darkMode ? (
                <LightModeOutlinedIcon className="navIcon" />
              ) : (
                <DarkModeIcon className="navIcon" />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip arrow TransitionComponent={Zoom} title="Messenger">
            <IconButton>
              <ChatIcon className="navIcon" />
            </IconButton>
          </Tooltip>
          <Tooltip arrow TransitionComponent={Zoom} title="Notification">
            <IconButton>
              <NotificationsActiveIcon className="navIcon" />
            </IconButton>
          </Tooltip>
        </div>
        <div className="avatar" ref={domNode}>
          <Tooltip arrow TransitionComponent={Zoom} title="Account">
            <div className="menuToggle" onClick={toggleMenu}>
              <div className="overlay"></div>
              <img
                src={
                  "../upload/img/" + currentUser?.profilePic ||
                  "assets/icons/noAvatar.png"
                }
                alt="img"
                className="navImg"
              />
              <div className="profileBadge">
                <KeyboardArrowDownIcon className="badgeIcon" />
              </div>
            </div>
          </Tooltip>
          {open && (
            <div className="menu">
              <Link to={`/profile/${currentUser?.id}`}>
                <div className="profile">
                  <img
                    src={
                      "../upload/img/" + currentUser?.profilePic ||
                      "assets/icons/noAvatar.png"
                    }
                  />
                  <span>
                    {currentUser?.firstname + " " + currentUser?.surname}
                  </span>
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
              <Link to={"/login"}>
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
