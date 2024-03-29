import AddLinkIcon from '@mui/icons-material/AddLink';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SchoolIcon from '@mui/icons-material/School';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import WidgetsIcon from '@mui/icons-material/Widgets';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import './leftSidebar.scss';

const LeftSidebar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftSidebar">
      <div className="leftSidebarWrapper">
        <ul className="leftSidebarList">
          <Link to={'/'}>
            <li className="leftSidebarListItem">
              <HomeIcon className="leftSidebarListItemIcon" />
              <span className="leftSidebarListItemText">Home</span>
            </li>
          </Link>
          <Link to={`/profile/${currentUser?.id}`}>
            <li className="leftSidebarListItem">
              <img
                src={"../upload/img/" + currentUser?.profilePic || 'assets/icons/noAvatar.png'}
                alt="img"
                className="leftSidebarImg"
              />
              <span
                className="leftSidebarListItemText"
                style={{ fontWeight: '500' }}
              >
                {currentUser?.firstname + ' ' + currentUser?.surname}
              </span>
            </li>
          </Link>
          <li className="leftSidebarListItem">
            <WidgetsIcon className="leftSidebarListItemIconDefault" />
            <span className="leftSidebarListItemText">Menu</span>
          </li>
          <li className="leftSidebarListItem">
            <PlayCircleIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Watch</span>
          </li>
          <li className="leftSidebarListItem">
            <WorkHistoryOutlinedIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Marketplace</span>
          </li>
          <li className="leftSidebarListItem">
            <PeopleIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Groups</span>
          </li>
          <li className="leftSidebarListItem">
            <SportsBasketballIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Games</span>
          </li>
          <li className="leftSidebarListItem">
            <BookmarkIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Bookmarks</span>
          </li>
          <li className="leftSidebarListItem">
            <EventIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Events</span>
          </li>
          <li className="leftSidebarListItem">
            <SchoolIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Courses</span>
          </li>
          <li className="leftSidebarListItem">
            <HelpOutlineIcon className="leftSidebarListItemIcon" />
            <span className="leftSidebarListItemText">Questions</span>
          </li>
          <li className="leftSidebarListItem">
            <AddLinkIcon className="leftSidebarListItemIconDefault" />
            <span className="leftSidebarListItemText">Shortcuts</span>
          </li>

          {/* Friends......Below */}

          <li className="leftSidebarListItem">
            <img
              src="/assets/icons/noAvatar.png"
              alt="avatar"
              className="leftSidebarImg"
            />
            <span className="leftSidebarListItemText">Page Name</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
