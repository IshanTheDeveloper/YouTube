import { useState, useEffect } from "react";
import "./all.css";
import Allcard from "./allcard"; // Fixed path for the Allcard component
import Sidebar from "../Sidebar/sidebar";
import AfterHeader from "../AfterHeader/afterheader";
import Navbar from "../Navbar/navbar";

function All() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:4000/videos");
        const data = await response.json();
        setVideoData(data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <AfterHeader />
      <Sidebar />
      <Navbar />
      <div className="all-category">
        {videoData.map((data) => (
          <Allcard
            key={data.id}
            id={data.id}
            title={data.title}
            channel={data.channelName}
            length={data.videoLength}
            thumbnail={data.thumbnail}
            logo={data.videoOwnerLogo}
            views={data.views}
            posted={data.posted}
          />
        ))}
      </div>
    </>
  );
}

export default All;
