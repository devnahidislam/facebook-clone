import React, { useContext } from 'react';
import { IconButton, Tooltip, Zoom } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './comments.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  // Temporary comments data
  const comments = [
    {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti repellat expedita voluptates.',
      name: 'Nahid Islam',
      UserId: 1,
      profilePic:
        'https://media-exp1.licdn.com/dms/image/C5603AQH1gJkOFOROSw/profile-displayphoto-shrink_800_800/0/1622908233063?e=1672876800&v=beta&t=3hD8rfblUpYIkCc2DrQA42KKL8__X76FX1DQiV85WTI',
    },
    {
      id: 2,
      desc: 'Lorem ipsum dolor sit.',
      name: 'Jui',
      UserId: 2,
      profilePic:
        'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  return (
    <div className="comments">
      <hr />
      <div className="writeComment">
        <div className="profileImg">
          <Link to={'/profile/1'}>
            <div className="overlay"></div>
            <img src={currentUser.profilePic} alt="" />
            <div className="activeStatus"></div>
          </Link>
        </div>
        <div className="commentInputContainer">
          <input
            type="text"
            placeholder="Write a comment..."
            className="commentInput"
          />
        </div>
        <IconButton className="commentBtn" color="primary" aria-label="Send">
          <SendIcon />
        </IconButton>
      </div>

      {comments.map((comment) => (
        <div className="comment">
          <div className="userProfile">
            <Link to={'/profile/1'}>
              <div className="overlay"></div>
              <img src={comment.profilePic} alt="" className="profileImg" />
            </Link>
          </div>
          <div className="commentInfo">
            <div className="mainComment">
              <div className="left">
                <div className="userName">
                  <Link to={'/profile/1'}>
                    <span>{comment.name}</span>
                  </Link>
                </div>
                <p className="commentDesc">{comment.desc}</p>
              </div>
              <div className="right">
                <Tooltip
                  arrow
                  placement="top"
                  TransitionComponent={Zoom}
                  title="Hide or Report this"
                >
                  <IconButton className="commentMoreBtn" aria-label="More">
                    <MoreHorizIcon className="commentMoreBtnIcon" />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="commentAction">
              <span className="like">Like</span>
              <FiberManualRecordIcon className="dotIcon" />
              <span className="reply">Reply</span>
              <FiberManualRecordIcon className="dotIcon" />
              <span className="date">1h</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
