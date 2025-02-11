import { useEffect, useState } from "react";
import "./videoPlayer.css";
import { Link } from "react-router-dom";
import axios from "axios";

function VideoDisplayer(props) {
  const [filtered, setFiltered] = useState([]); // Stores the filtered list of videos
  const [comment, setComment] = useState(""); // Manages comment input
  const [filteredVideo, setFilteredVideo] = useState([]); // Stores the video matching the provided ID

  const ids = props.id; // Extract video ID from props

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/videos");
      const data = await response.json();

      // Filter videos where the ID is even
      const filteredProduct = data.filter((item) => item.id % 2 === 0);
      setFiltered(filteredProduct);

      // Filter videos that match the provided ID
      const commentFiltered = data.filter((item) => item.id === ids);
      setFilteredVideo(commentFiltered);
    }
    fetchData();
  }, []); // Dependency array is empty, so this runs only once when the component mounts

  const handleComment = async () => {
    if (!filteredVideo.length) {
      alert("No video selected.");
      return;
    }

    if (!comment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }

    // Create a new comment object
    const currentComment = {
      personEmail: "@ishanjaiswal",
      personLogo: filteredVideo[0]?.comments?.[0]?.personLogo || "",
      personComment: comment,
      commentLike: "0",
      commentDislikes: "0",
    };

    // Push the new comment into the comments array
    filteredVideo[0].comments.push(currentComment);
    const commentData = filteredVideo[0];

    try {
      await axios.post("http://localhost:4000/saveComment", { commentData });
      alert("Comment added successfully");
      setComment(""); // Clear the input field
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment");
    }
  };

  return (
    <div className="video-displayer-container">
      {/* Video Player */}
      <div className="video-displayer">
        <iframe
          src={props.url}
          width="900"
          height="480"
          allow="autoplay"
          frameborder="0"
        ></iframe>
      </div>

      {/* Video Title */}
      <div className="video-title">
        <h1>{props.title}</h1>
      </div>

      {/* Channel Information */}
      <div className="channel-display-container">
        <div className="channel-display-container1">
          {/* Channel Logo */}
          <div className="channel-display-logo">
            <img src={props.logo} alt="" />
          </div>
          {/* Channel Name & Subscribers */}
          <div className="channel-display-name">
            <p>{props.channel}</p>
            <p>1.7M subscribers</p>
          </div>
          {/* Subscribe Button */}
          <div className="subscribe-button">
            <button>Subscribe</button>
          </div>
        </div>

        {/* Video Action Buttons (Likes, Dislikes, Share, Download) */}
        <div className="channel-display-container2">
          <div className="channel-display-likes">
            <button className="likes">
              <img
                src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
                alt=""
              />
              <span>{props.likes}</span>
            </button>
            <button className="dislikes">
              <img
                src="https://cdn-icons-png.flaticon.com/128/126/126504.png"
                alt=""
              />
              <span>{props.dislikes}</span>
            </button>
          </div>
          <div className="channel-display-share">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2958/2958783.png"
              alt=""
            />
            <p>Share</p>
          </div>
          <div className="channel-display-download">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3502/3502477.png"
              alt=""
            />
            <p>Download</p>
          </div>
          <div className="channel-display-menu">
            <img
              src="https://cdn-icons-png.flaticon.com/128/18589/18589951.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Video Description */}
      <div className="video-displayer-description">
        <span>{props.views} views</span>
        <span>{props.posted}</span>
        <p>{props.description}</p>
        <p>...more</p>
      </div>

      {/* Comment Section */}
      <div className="video-displayer-comments">
        <p>{props.commentsCount}</p>
        <div className="sort-by-container">
          <img
            src="https://cdn-icons-png.flaticon.com/128/13588/13588584.png"
            alt=""
          />
          <p>Sort by</p>
        </div>
      </div>

      {/* Add a Comment */}
      <div className="video-displayer-add-comment">
        <span>
          <img src={props.logo} alt="" />
        </span>
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="add-comment-buttons">
          <button>Cancel</button>
          <button onClick={handleComment}>Comment</button>
        </div>
      </div>

      {/* Video Suggestions */}
      <div className="video-suggestion-container">
        {filtered.map((item) => {
          return (
            <Link to={`/all/${item.id}`} key={item.id}>
              <div className="suggestion-card">
                <div className="suggestion-logo">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="suggestion-info">
                  <h4>{item.fullTitle}</h4>
                  <p>{item.channelName}</p>
                  <p>
                    {item.views} • {item.posted}{" "}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default VideoDisplayer;
