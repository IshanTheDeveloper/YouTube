import "./videoPlayer.css";
function VideoDisplayer(props) {
  return (
    <div className="video-displayer-container">
      <div className="video-displayer">
        <iframe
          src={props.url}
          width="900"
          height="480"
          allow="autoplay"
          frameborder="0"
        ></iframe>
      </div>
      <div className="video-title">
        <h1>{props.title}</h1>
      </div>
      <div className="channel-display-container">
        <div className="channel-display-container1">
          <div className="channel-display-logo">
            <img src={props.logo} alt="" />
          </div>
          <div className="channel-display-name">
            <p>{props.channel}</p>
            <p>1.7M subscribers</p>
          </div>
          <div className="subscribe-button">
            <button>Subscribe</button>
          </div>
        </div>
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
      <div className="video-displayer-description">
        <span>{props.views} views</span>
        <span>{props.posted}</span>
        <p>{props.description}</p>
        <p>...more</p>
      </div>
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
      <div className="video-displayer-add-comment">
        <span>
          <img src={props.logo} alt="" />
        </span>
        <input type="text" placeholder="Add a comment" />
        <div className="add-comment-buttons">
          <button>Cancel</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
}
export default VideoDisplayer;
