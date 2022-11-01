import React from 'react';
import './rightSidebar.scss';
import { IconButton, Tooltip, Zoom } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

const RightSidebar = () => {
  return (
    <div className="rightSidebar">
      <div className="rightSidebarWrapper">
        {/* Pages and profile container */}
        <div className="pageProfile">
          <div className="headerTitle">
            <h4>Your pages and profiles</h4>
            <div className="headerBtnIcon">
              <Tooltip arrow TransitionComponent={Zoom} title="Options">
                <IconButton color="default" aria-label="More">
                  <MoreHorizIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <ul>
            <li className="rightsidebarPage">
              <div className="rightsidebarPageImg">
                <img
                  src="assets/icons/nahid.jpg"
                  alt="avatar"
                  className="pageImg"
                />
              </div>
              <div className="rightsidebarPageName">Page Name</div>
            </li>

            <li className="pageSwitch rightsidebarPage">
              <SupervisedUserCircleOutlinedIcon className="rightSidebarIcon" />
              <div className="rightsidebarPageText">Switch into page</div>
            </li>
            <li className="pageSwitch rightsidebarPage">
              <CampaignOutlinedIcon className="rightSidebarIcon" />
              <div className="rightsidebarPageText">Create promotion</div>
            </li>
          </ul>
        </div>
        {/* Birthday Container */}
        <div className="birthdayContainer">
          <h4 className="rightSidebarHeader">Birthdays</h4>
          <div className="birthdayEvent">
            <img src="assets/icons/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Jahid Hasan</b> and <b>3 other friends</b> have birthdays
              today.
            </span>
          </div>
        </div>
        {/* Suggest Friends Container */}
        <div className="suggest">
          <div className="suggestHeader">
            <h4 className="header">Suggestion for you</h4>
            <span>See all</span>
          </div>

          {/* Suggest friend item */}
          <div className="suggestFriends">
            <div className="suggestLeft">
              <img
                src="assets/icons/nahid.jpg"
                alt="avatar"
                className="suggestLeftImg"
              />
            </div>
            <div className="suggestRight">
              <div className="suggestTitle">
                <h5 className="friendName">Nahid Islam</h5>
                <span className="duration">7h</span>
              </div>
              <div className="suggestBtn">
                <button className="basicBtn followBtn">Follow</button>
                <button className="basicBtn deleteBtn">Delete</button>
              </div>
            </div>
          </div>

          <div className="suggestFriends">
            <div className="suggestLeft">
              <img
                src="assets/icons/nahid.jpg"
                alt="avatar"
                className="suggestLeftImg"
              />
            </div>
            <div className="suggestRight">
              <div className="suggestTitle">
                <h5 className="friendName">Nahid Islam</h5>
                <span className="duration">7h</span>
              </div>
              <div className="suggestBtn">
                <button className="basicBtn followBtn">Follow</button>
                <button className="basicBtn deleteBtn">Delete</button>
              </div>
            </div>
          </div>
        </div>
        {/* Active Friends container */}
        <div className="friendListContainer">
          <div className="headerTitle">
            <h4>Contacts</h4>
            <div className="headerBtnIcon">
              <Tooltip arrow TransitionComponent={Zoom} title="New room">
                <IconButton color="default" aria-label="New Room">
                  <VideoCallIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow TransitionComponent={Zoom} title="Search by name">
                <IconButton color="default" aria-label="Search">
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow TransitionComponent={Zoom} title="Options">
                <IconButton color="default" aria-label="More">
                  <MoreHorizIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          {/* Active friends list */}
          <ul>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="assets/icons/noAvatar.png"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Username</div>
            </li>

            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="assets/icons/noAvatar.png"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Username</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarFriendImgContainer">
                <img
                  src="assets/icons/noAvatar.png"
                  alt="avatar"
                  className="friendImg"
                />
                <div className="activeStatus"></div>
              </div>
              <div className="rightbarUsername">Username</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
