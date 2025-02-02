import "./header.css";
function Header() {
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
        <img
          src="https://cdn-icons-png.flaticon.com/128/2311/2311524.png"
          alt=""
        />
        <div className="sign-in-button">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
            alt=""
          />
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
