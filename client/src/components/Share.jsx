import MoodIcon from "@mui/icons-material/Mood";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import "./share.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "./../axios";
import { InstagramIcon } from "@mui/icons-material/Instagram";

const Share = () => {
  const { currentUser } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts/addpost", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handlePost = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    if (desc !== "") imgUrl = mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share">
      <div className="shareTop">
        <div className="shareImg">
          <div className="overlay"></div>
          <img
            src={
              currentUser.profilePic
                ? "../upload/img/" + currentUser.profilePic
                : "/assets/icons/noAvatar.png"
            }
            alt="avatar"
          />
        </div>
        <div className="shareInputContainer">
          <input
            placeholder={
              "What's on your mind, " +
              currentUser?.firstname +
              " " +
              currentUser?.surname +
              "?"
            }
            className="shareInput"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button className="shareBtn" onClick={handlePost}>
          Post
        </button>
      </div>

      <div className="uploadImg">
        {file && (
          <img className="selectedImg" src={URL.createObjectURL(file)} />
        )}
      </div>

      <hr />

      <div className="shareBottom">
        <div className="shareOption">
          <VideoCameraBackIcon color="error" className="icon" />
          <span className="shareOptionText">Live Video</span>
        </div>

        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file" className="shareOption">
          <PermMediaIcon color="success" className="icon" />
          <span className="shareOptionText">Photo/Video</span>
        </label>

        <div className="shareOption">
          <MoodIcon color="warning" className="icon" />
          <span className="shareOptionText">Feeling/Activity</span>
        </div>
      </div>
    </div>
  );
};

export default Share;
