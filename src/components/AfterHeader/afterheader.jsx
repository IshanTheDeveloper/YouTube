import "./afterheader.css";

function AfterHeader(props) {
  const storedName = localStorage.getItem("profileName"); // Retrieve email from localStorage
  const displayName = props.name || storedName; // Use prop if available, otherwise use stored name

  return (
    <div className="header-container">
      <div className="input-search">
        <input type="text" placeholder="Search" />
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/151/151773.png"
            alt=""
          />
        </button>
      </div>
      <div className="voice-input">
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/7175/7175253.png"
            alt=""
          />
        </button>
      </div>
      <div className="sign-in">
        <div className="create-in-button">
          <img
            src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
            alt=""
          />
          <p>Create</p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1827/1827347.png"
          alt=""
          className="notification-icon"
        />
        <div className="after-login-profile">
          <div className="dropdown">
            <span className="after-login-profile-photo">
              {displayName[0].toUpperCase()}
            </span>
            <div className="dropdown-content">
              <div className="channel-name">
                <div className="channel-profile">
                  <span className="channel-profile-photo">
                    {displayName[0]}
                  </span>
                </div>
                <div className="channel-info">
                  <h2>{displayName.slice(0, 5)}</h2>
                  <h3>{`@${displayName.slice(0, 7)}8717`}</h3>
                  <a href="#">View your channel</a>
                </div>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/104/104093.png"
                  alt=""
                />
                <p>Google Account</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/17219/17219146.png"
                  alt=""
                />
                <p>Switch Account</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/992/992680.png"
                  alt=""
                />
                <p>Sign out</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/15078/15078497.png"
                  alt=""
                />
                <p>Youtube Studio</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5719/5719055.png"
                  alt=""
                />
                <p>Purchases and memberships</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3329/3329048.png"
                  alt=""
                />
                <p>Your data in Youtube</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12897/12897950.png"
                  alt=""
                />
                <p>Restricted Mode: Off</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1011/1011322.png"
                  alt=""
                />
                <p>Location: India</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/159/159602.png"
                  alt=""
                />
                <p>Keyboard shortcuts</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/503/503849.png"
                  alt=""
                />
                <p>Settings</p>
              </div>
              <hr />
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18/18436.png"
                  alt=""
                />
                <p>Help</p>
              </div>
              <div className="channel-profiles">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1628/1628666.png"
                  alt=""
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
