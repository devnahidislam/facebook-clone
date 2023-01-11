import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import MoodIcon from '@mui/icons-material/Mood';
import './share.scss';
import { Link } from 'react-router-dom';

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="share">
      <div className="shareTop">
        <div className="shareImg">
          <Link to={'/profile/1'}>
            <div className="overlay"></div>
            <img
              src={
                currentUser?.profilePic
                  ? currentUser.profilePic
                  : '/assets/icons/noAvatar.png'
              }
              alt="avatar"
            />
          </Link>
        </div>
        <div className="shareInputContainer">
          <input
            placeholder={
              "What's on your mind, " +
              currentUser?.firstname +
              ' ' +
              currentUser?.surname +
              '?'
            }
            className="shareInput"
          />
        </div>
        <div className="shareBtn">Post</div>
      </div>

      <hr />

      <div className="shareBottom">
        <div className="shareOption">
          <VideoCameraBackIcon color="error" className="icon" />
          <span className="shareOptionText">Live Video</span>
        </div>
        <div className="shareOption">
          <PermMediaIcon color="success" className="icon" />
          <span className="shareOptionText">Photo/Video</span>
        </div>
        <div className="shareOption">
          <MoodIcon color="warning" className="icon" />
          <span className="shareOptionText">Feeling/Activity</span>
        </div>
      </div>
    </div>
  );
};

export default Share;
