import "./login.css";
function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-info">
          <img
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            alt=""
          />
          <h1>Sign in</h1>
          <p>
            with your Google Account to continue to YouTube. This account will
            be available to other Google apps in the browser.
          </p>
        </div>
        <div className="login-details">
          <input type="text" name="" id="" placeholder="Email or phone" />
          <h3>Forgot email?</h3>
          <input type="password" name="" id="" placeholder="Password" />
          <h3>Forgot email?</h3>
          <p>
            Not your computer? Use Guest mode to sign in privately.{" "}
            <a href="https://support.google.com/chrome/answer/6130773?hl=en">
              {" "}
              Learn more about using Guest mode
            </a>{" "}
          </p>

          <div className="login-submit-button">
            <button>Login</button>
          </div>
        </div>
      </div>
      <div className="login-page-help">
        <div className="language-select">
          <select>
            <option value="en">English (United States)</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="it">Italian</option>
            <option value="nl">Dutch</option>
            <option value="tr">Turkish</option>
            <option value="sv">Swedish</option>
            <option value="pl">Polish</option>
            <option value="uk">Ukrainian</option>
            <option value="th">Thai</option>
            <option value="vi">Vietnamese</option>
            <option value="he">Hebrew</option>
            <option value="id">Indonesian</option>
            <option value="cs">Czech</option>
            <option value="ro">Romanian</option>
            <option value="hu">Hungarian</option>
            <option value="el">Greek</option>
            <option value="da">Danish</option>
            <option value="fi">Finnish</option>
            <option value="no">Norwegian</option>
            <option value="bg">Bulgarian</option>
            <option value="ms">Malay</option>
          </select>
        </div>
        <div className="help-items">
          <p>Help</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
