import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import ReadMoreLess from "../readMoreLess";
import "./comments.scss";
import { makeRequest } from "../axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments/addcomment", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleComment = async (e) => {
    e.preventDefault();
    if (desc !== '') mutation.mutate({ desc, postId });
    setDesc("");
  };

  // Temporary comments data
  // const comments = [
  //   {
  //     id: 1,
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti repellat expedita voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti repellat expedita voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti repellat expedita voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti repellat expedita voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti repellat expedita voluptates.",
  //     name: "Nahid Islam",
  //     UserId: 1,
  //     profilePic:
  //       "https://media-exp1.licdn.com/dms/image/C5603AQH1gJkOFOROSw/profile-displayphoto-shrink_800_800/0/1622908233063?e=1672876800&v=beta&t=3hD8rfblUpYIkCc2DrQA42KKL8__X76FX1DQiV85WTI",
  //   },
  //   {
  //     id: 2,
  //     desc: "Lorem ipsum dolor sit.",
  //     name: "Jui",
  //     UserId: 2,
  //     profilePic:
  //       "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  return (
    <div className="comments">
      <hr />
      <div className="writeComment">
        <div className="profileImg">
          <Link to={"/profile/1"}>
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
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <IconButton
          className="commentBtn"
          color="primary"
          aria-label="Send"
          onClick={handleComment}
        >
          <SendIcon />
        </IconButton>
      </div>

      {isLoading
        ? "Loadig"
        : data?.map((comment) => (
            <div className="comment">
              <div className="userProfile">
                <Link to={"/profile/1"}>
                  <div className="overlay"></div>
                  <img src={comment.profilePic} alt="" className="profileImg" />
                </Link>
              </div>
              <div className="commentInfo">
                <div className="mainComment">
                  <div className="left">
                    <div className="userName">
                      <Link to={"/profile/1"}>
                        <span>{comment.firstname + " " + comment.surname}</span>
                      </Link>
                    </div>
                    <ReadMoreLess cls={"commentDesc"} limit={150}>
                      {comment.desc}
                    </ReadMoreLess>
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
                  <span className="date">
                    {moment(comment.createdAt).fromNow()}
                  </span>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Comments;
