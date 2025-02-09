import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AfterHeader from "../AfterHeader/afterheader";
import Sidebar from "../Sidebar/sidebar";
import "./mychannel.css";

function Mychannel() {
  const [profileWord, setProfileWord] = useState("");
  const [username, setUsername] = useState("");
  const [userhandle, setUserhandle] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/userData");
        const result = await response.json();
        const userInitial = result[result.length - 1]?.username[0] || "";
        const name = result[result.length - 1].username;
        const handle = result[result.length - 1].userhandle;
        setUsername(name);
        setUserhandle(handle);
        setProfileWord(userInitial);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <AfterHeader />
      <Sidebar />
      <div className="my-channel-container">
        <div className="my-channel-name">
          <div className="my-channel-name1">
            <p>{profileWord}</p>
          </div>
          <div className="my-channel-name2">
            <h1>{username}</h1>
            <div className="channel-info">
              {" "}
              <span>{userhandle}</span> - <span>12 subscribers</span> -{" "}
              <span> 6 videos</span>
            </div>
            <p>
              More about this channel <strong>...more</strong>
            </p>
            <div className="my-channel-buttons">
              <button>Customise channel</button>
              <button>Manage videos</button>
            </div>
          </div>
        </div>
        <div className="my-channel-category">
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
        <h2 className="for-you">For you</h2>
      </div>
    </div>
  );
}

export default Mychannel;
