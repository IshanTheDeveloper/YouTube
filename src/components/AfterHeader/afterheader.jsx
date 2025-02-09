import "./afterheader.css";
import { Link } from "react-router-dom";
function AfterHeader(props) {
  // Retrieve the profile name from localStorage and provide a fallback
  const storedName = localStorage.getItem("profileName") || "";
  const displayName = props.name || storedName; // Use prop if available, fallback to stored name

  // Safely extract the first character of displayName and default to empty if not available
  const initialLetter = displayName ? displayName[0].toUpperCase() : "";
  const channelName = displayName.slice(0, 5) || "Guest";
  const channelHandle = `@${displayName.slice(0, 7) || "guest"}8717`;

  return (
    <div className="header-container-area">
      <div className="input-search">
        <input type="text" placeholder="Search" value={props.title} readOnly />
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/151/151773.png"
            alt="Search Icon"
          />
        </button>
      </div>

      <div className="voice-input">
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/7175/7175253.png"
            alt="Voice Icon"
          />
        </button>
      </div>

      <div className="sign-in-area">
        <Link to="/create">
          {" "}
          <div className="create-in-button">
            <span>+</span>
            <p>Create</p>
          </div>
        </Link>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1827/1827347.png"
          alt="Notification Icon"
          className="notification-icon"
        />

        <div className="after-login-profile">
          <div className="dropdown">
            <span className="after-login-profile-photo">{initialLetter}</span>
            <div className="dropdown-content">
              <div className="channel-name">
                <div className="channel-profile">
                  <span className="channel-profile-photo">{initialLetter}</span>
                </div>
                <div className="channel-info">
                  <h2>{channelName}</h2>
                  <h3>{channelHandle}</h3>
                  <a href="/mychannel">View your channel</a>
                </div>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/104/104093.png"
                  alt="Google Account"
                />
                <p>Google Account</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/17219/17219146.png"
                  alt="Switch Account"
                />
                <p>Switch Account</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/992/992680.png"
                  alt="Sign Out"
                />
                <p>Sign out</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/15078/15078497.png"
                  alt="YouTube Studio"
                />
                <p>YouTube Studio</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5719/5719055.png"
                  alt="Purchases"
                />
                <p>Purchases and memberships</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3329/3329048.png"
                  alt="Data"
                />
                <p>Your data in YouTube</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12897/12897950.png"
                  alt="Restricted Mode"
                />
                <p>Restricted Mode: Off</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1011/1011322.png"
                  alt="Location"
                />
                <p>Location: India</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/159/159602.png"
                  alt="Shortcuts"
                />
                <p>Keyboard shortcuts</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/503/503849.png"
                  alt="Settings"
                />
                <p>Settings</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18/18436.png"
                  alt="Help"
                />
                <p>Help</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1628/1628666.png"
                  alt="Feedback"
                />
                <p>Send feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterHeader;
