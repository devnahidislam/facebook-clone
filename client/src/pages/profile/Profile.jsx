import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Posts } from "../../components";
import { AuthContext } from "../../context/authContext";
import "./profile.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: rIsloading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  const handleFollow = () => {};

  return (
    <div className="profile">
      <div className="container">
        <div className="coverImg">
          <img src={data?.coverpic || "/assets/post/3.jpeg"} alt="" />
        </div>

        <div className="profileInfo">
          <div className="topcontainer">
            <div className="infoLeft">
              <img
                className="profileImg"
                src={data?.profilePic || "assets/icons/noAvatar.png"}
                alt=""
              />
              <div className="profileIcon">
                <CameraAltIcon className="icon" />
              </div>
            </div>
            <div className="infoCenter">
              <h3 className="userName">
                {data?.firstname + " " + data?.surname}
              </h3>
              <span className="friendsNumber">124 friends</span>
              <div className="friendsProfiles">
                <img
                  src="/assets/person/2.jpeg"
                  alt=""
                  className="friendsProfilePic"
                />
                <img
                  src="/assets/person/1.jpeg"
                  alt=""
                  className="friendsProfilePic"
                />
                <img
                  src="/assets/person/4.jpeg"
                  alt=""
                  className="friendsProfilePic"
                />
                <img
                  src="/assets/person/5.jpeg"
                  alt=""
                  className="friendsProfilePic"
                />
                <img
                  src="/assets/person/7.jpeg"
                  alt=""
                  className="friendsProfilePic"
                />
                <img
                  src="/assets/person/8.jpeg"
                  alt=""
                  className="friendsProfilePic"
                />
              </div>
            </div>
          </div>
          <div className="infoRight">
            <div className="top">
              <div className="socialShare">
                <a href="https://github.com/devnahidislam" target="_blank">
                  <GitHubIcon className="icon" />
                </a>
                <a href="https://twitter.com/devnahidislam" target="_blank">
                  <TwitterIcon className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/devnahidislam"
                  target="_blank"
                >
                  <LinkedInIcon className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/devnahidislam"
                  target="_blank"
                >
                  <InstagramIcon className="icon" />
                </a>
              </div>
            </div>
            <div className="bottom">
              {rIsloading ? (
                "Loading"
              ) : currentUser.id === userId ? (
                <>
                  <div className="addStoryBtn">
                    <AddCircleOutlinedIcon fontSize="small" />
                    Add to story
                  </div>
                  <div className="addStoryBtn editProfile">
                    <ModeEditIcon fontSize="small" />
                    Edit profile
                  </div>
                </>
              ) : (
                <div className="bottom">
                  <div className="followBtn" onClick={handleFollow}>
                    {relationshipData?.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="profileMain">
        <div className="profileIntro">
          <div className="about">
            <h3 className="aboutHeader">Intro</h3>
            <div className="data">
              <BusinessCenterIcon className="icon" />
              <p>Full Stack Developer</p>
            </div>
            <div className="data">
              <MapsHomeWorkIcon className="icon" />
              <p>
                Lives in <Link to={"/"}>{data?.city || "Dinajpur"}</Link>
              </p>
            </div>
            <div className="data">
              <LocationOnIcon className="icon" />
              <p>
                From{" "}
                <Link to={"/"}>{data?.city || "Dinajpur"}, Bangladesh</Link>
              </p>
            </div>
            <div className="data">
              <FavoriteIcon className="icon" />
              <p>Single</p>
            </div>
            <div className="data">
              <RssFeedIcon className="icon" />
              <p>Followed by 192k people</p>
            </div>
            <div className="editBtn">Edit Details</div>
          </div>

          <div className="photosContainer">
            <div className="top">
              <h3>Photos</h3>
              <Link to={"/"}>See all photos</Link>
            </div>
            <div className="photos">
              <div className="photo">
                <img src="/assets/post/1.jpeg" alt="" />
                <img src="/assets/post/2.jpeg" alt="" />
                <img src="/assets/post/3.jpeg" alt="" />
                <img src="/assets/post/4.jpeg" alt="" />
                <img src="/assets/post/5.jpeg" alt="" />
                <img src="/assets/post/6.jpeg" alt="" />
                <img src="/assets/post/7.jpeg" alt="" />
                <img src="/assets/post/8.jpeg" alt="" />
                <img src="/assets/post/9.jpeg" alt="" />
              </div>
            </div>
          </div>

          <div className="friendsContainer">
            <div className="top">
              <h3>Friends</h3>
              <Link to={"/"}>See all friends</Link>
            </div>
            <div className="friends">
              <div className="friend">
                <img src="/assets/person/1.jpeg" alt="" />
                <span>Rafi Islam</span>
              </div>
              <div className="friend">
                <img src="/assets/person/2.jpeg" alt="" />
                <span>Nahid Islam</span>
              </div>
              <div className="friend">
                <img src="/assets/person/10.jpeg" alt="" />
                <span>Jecika</span>
              </div>
              <div className="friend">
                <img src="/assets/person/4.jpeg" alt="" />
                <span>Jui</span>
              </div>
              <div className="friend">
                <img src="/assets/person/6.jpeg" alt="" />
                <span>Julia</span>
              </div>
              <div className="friend">
                <img src="/assets/person/6.jpeg" alt="" />
                <span>Rupa</span>
              </div>
              <div className="friend">
                <img src="/assets/person/7.jpeg" alt="" />
                <span>Maria</span>
              </div>
              <div className="friend">
                <img src="/assets/person/8.jpeg" alt="" />
                <span>Alexa</span>
              </div>
              <div className="friend">
                <img src="/assets/person/9.jpeg" alt="" />
                <span>Jennie</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profilePosts">
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Profile;
