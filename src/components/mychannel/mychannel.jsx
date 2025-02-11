import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AfterHeader from "../AfterHeader/afterheader";
import Sidebar from "../Sidebar/sidebar";
import "./mychannel.css";

function Mychannel() {
  // State variables for user and video data
  const [profileWord, setProfileWord] = useState(""); // Stores first letter of username
  const [username, setUsername] = useState(""); // Stores username
  const [userhandle, setUserhandle] = useState(""); // Stores user handle
  const [myvideo, setMyvideo] = useState([]); // Stores videos of the channel

  useEffect(() => {
    // Fetch user data from backend
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/channelData");
        const result = await response.json();
        const userInitial = result[result.length - 1]?.username[0] || ""; // Get first letter of username
        const name = result[result.length - 1].username; // Get username
        const handle = result[result.length - 1].userhandle; // Get user handle
        setUsername(name);
        setUserhandle(handle);
        setProfileWord(userInitial);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []); // Runs once when component mounts

  useEffect(() => {
    // Fetch video data from backend
    async function fetchVideos() {
      try {
        const response = await fetch("http://localhost:4000/videos");
        const data = await response.json();
        const filtered = data.filter((item) => item.id % 3 === 0); // Filter videos (example logic)
        setMyvideo(filtered);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    }
    fetchVideos();
  }, []); // Runs once when component mounts

  // Function to hide a video (mark it as hidden)
  const hideVideo = (id) => {
    setMyvideo((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id ? { ...video, hidden: true } : video
      )
    );
  };

  return (
    <div>
      <AfterHeader /> {/* Header section */}
      <Sidebar /> {/* Sidebar navigation */}
      <div className="my-channel-container">
        {" "}
        {/* Main channel container */}
        <div className="my-channel-name">
          {" "}
          {/* Channel name section */}
          <div className="my-channel-name1">
            <p>{profileWord}</p> {/* Display first letter of username */}
          </div>
          <div className="my-channel-name2">
            <h1>{username}</h1> {/* Display full username */}
            <div className="channel-info">
              <span>{userhandle}</span> - <span>12 subscribers</span> -{" "}
              <span>6 videos</span>{" "}
              {/* Display user handle, subscribers, and video count */}
            </div>
            <p>
              More about this channel <strong>...more</strong>
            </p>
            <div className="my-channel-buttons">
              {" "}
              {/* Channel action buttons */}
              <button>Customise channel</button>
              <button>Manage videos</button>
            </div>
          </div>
        </div>
        <div className="my-channel-category">
          {" "}
          {/* Channel navigation categories */}
          <span>Home</span>
          <span>Videos</span>
          <span>Shorts</span>
          <span>Playlists</span>
          <span>Posts</span>
          <span>
            <img src="" alt="" />
          </span>
        </div>
        <hr />
        <h2 className="for-you">For you</h2>{" "}
        {/* Section for suggested videos */}
        <div className="my-channel-video-container">
          {" "}
          {/* Video container */}
          {myvideo.map(
            (data) =>
              !data.hidden && ( // Only show videos that are not hidden
                <div key={data.id} className="my-channel-video-card">
                  {" "}
                  {/* Video card */}
                  <Link to={`/all/${data.id}`}>
                    {" "}
                    {/* Link to video details */}
                    <div className="my-channel-video">
                      <img src={data.thumbnail} alt="" />{" "}
                      {/* Video thumbnail */}
                    </div>
                    <div className="my-channel-video-title">
                      <h2>{data.fullTitle}</h2> {/* Video title */}
                    </div>
                    <div className="my-channel-video-views">
                      <span>{data.views}</span> <span>|</span>
                      <span>{data.posted}</span>{" "}
                      {/* Video views and posted date */}
                    </div>
                  </Link>
                  <button
                    className="delete-button"
                    onClick={() => hideVideo(data.id)} // Hide video on button click
                  >
                    Delete
                  </button>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Mychannel;
