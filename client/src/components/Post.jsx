import React from 'react';
import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Comments from './Comments';
import { useState } from 'react';
import ReadMoreLess from '../readMoreLess';

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = true;

  return (
    <div className="post">
      <div className="user">
        <div className="userInfo">
          <div className="profileImg">
            <Link to={`/profile/${post.userId}`}>
              <div className="overlay"></div>
              <img src={post.profilePic} alt="" />
            </Link>
          </div>
          <div className="details">
            <Link to={`/profile/${post.userId}`}>
              <span className="userName">{post.name}</span>
            </Link>
            <div className="postStatus">
              <span className="postDate">3 min ago</span>
              <FiberManualRecordIcon className="dotIcon" />
              <PublicIcon className="publickIcon" />
            </div>
          </div>
        </div>
        <IconButton className="postMoreIconBtn" aria-label="More">
          <MoreHorizIcon className="postMoreIcon" />
        </IconButton>
      </div>

      <div className="content">
        <ReadMoreLess cls={'postDesc'} limit={150}>
          {post.desc}
        </ReadMoreLess>
        {post.img && <img src={post.img} alt="" className="postImg" />}
      </div>
      <div className="info">
        <div className="postActivity">
          <div className="left">
            <div className="likeIcons">
              <div className="like">
                <ThumbUpIcon className="likeIcon" />
              </div>
              <div className="love">
                <FavoriteIcon className="loveIcon" />
              </div>
            </div>
            <span className="likeNumber">24</span>
          </div>
          <div className="right">
            <span className="commentsNum">5 Comments</span>
            <FiberManualRecordIcon className="dotIcon" />
            <span className="shares">7 Shares</span>
          </div>
        </div>

        <hr />

        <div className="postActions">
          <div className="likeBtn">
            {liked ? (
              <FavoriteIcon className="likedIcon" />
            ) : (
              <FavoriteBorderIcon className="icon" />
            )}
            <span className="actionBtnText">Like</span>
          </div>

          <div
            className="commentBtn"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <ChatBubbleOutlineIcon className="icon" />
            <span className="actionBtnText">Comment</span>
          </div>

          <div className="shareBtn">
            <div className="shareBtn">
              <ShareOutlinedIcon className="icon" />
              <span className="actionBtnText">Share</span>
            </div>
          </div>
        </div>
      </div>
      {commentOpen && <Comments />}
    </div>
  );
};

export default Post;
