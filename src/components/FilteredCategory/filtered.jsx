import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./filtered.css";

function Filtered() {
  const location = useLocation(); // Hook to access the current route location

  // Memoize filtered videos from location state to prevent unnecessary re-renders
  const filteredVideos = useMemo(() => location.state?.data || [], [location]);

  return (
    <div className="filtered-page">
      {" "}
      {/* Main page container */}
      <div className="filtered-content">
        {" "}
        {/* Content wrapper */}
        <div className="filtered-main-container">
          {" "}
          {/* Container for filtered video list */}
          {filteredVideos.length > 0 ? ( // Check if there are filtered videos
            filteredVideos.map((video) => (
              <Link to={`/all/${video.id}`} key={video.id}>
                {" "}
                {/* Link to video details */}
                <div className="filtered-card1">
                  {" "}
                  {/* Video card */}
                  <img src={video.thumbnail} alt={video.title} />{" "}
                  {/* Video thumbnail */}
                  <div className="filter-card-info">
                    {" "}
                    {/* Video details section */}
                    <img
                      src={video.videoOwnerLogo}
                      alt={video.channelName}
                      className="channel-logo"
                    />{" "}
                    {/* Channel logo */}
                    <div className="info-container">
                      {" "}
                      {/* Container for video info */}
                      <h3>{video.title}</h3> {/* Video title */}
                      <p>{video.channelName}</p> {/* Channel name */}
                      <p>
                        {video.views} | {video.posted}{" "}
                        {/* Views and posted time */}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No matching videos found.</p> // Message if no videos match the filter
          )}
        </div>
      </div>
    </div>
  );
}

export default Filtered;
